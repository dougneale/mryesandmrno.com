import { GetStaticProps, GetStaticPaths } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { fetchPostContent } from "../lib/posts";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from 'date-fns';
import PostLayout from "../components/PostLayout";

import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";

export type Props = {
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  source: MdxRemote.Source;
};

const components = { InstagramEmbed, YouTube, TwitterTweetEmbed };
const slugToPostContent = (postContents => {
  let hash = {}
  postContents.forEach(it => hash[it.slug] = it)
  return hash;
})(fetchPostContent());

export default function Story({
  title,
  // dateString,
  // slug,
  // tags,
  // author,
  // description = "",
  source,
}: any) {
  console.log(source)
  const content = hydrate(source)
  return (
    <div>{content}</div>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   console.log('hiii')
//   const paths = fetchPostContent().map(it => "/" + it.slug);
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('hiii')
  const slug = 'our-story'
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
  });
  const mdxSource = await renderToString(content, { components, scope: data });
  return {
    props: {
      title: 'story',
      // dateString: data.date,
      // slug: data.slug,
      // description: "",
      // tags: data.tags,
      // author: data.author,
      source: mdxSource
    },
  };
};

