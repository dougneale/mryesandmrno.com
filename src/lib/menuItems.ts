import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const menuItemsDirectory = path.join(process.cwd(), "content/menuItems");

export type MenuItemContent = {
  readonly date: string;
  readonly title: string;
  readonly slug: string;
  readonly fullPath: string;
  readonly thumbnail: string;
  readonly description: string;
};

let menuCache: MenuItemContent[];

export function fetchMenuItemContent(): MenuItemContent[] {
  if (menuCache) {
    return menuCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(menuItemsDirectory);
  const allMenuItemsData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(menuItemsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as {
        date: string;
        title: string;
        tags: string[];
        slug: string;
        fullPath: string,
      };
      matterData.fullPath = fullPath;

      const slug = fileName.replace(/\.mdx$/, "");

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        );
      }

      return matterData;
    });
  // Sort posts by date
  menuCache = allMenuItemsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return menuCache;
}


export function listMenuContent(): MenuItemContent[] {
  return fetchMenuItemContent()
}
