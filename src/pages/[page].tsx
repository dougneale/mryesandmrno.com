import { GetStaticProps, GetStaticPaths } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { fetchPostContent } from "../lib/posts";
import fs from "fs";
import yaml from "js-yaml";

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
  image,
  video_link,
  source,
}: any) {
  const content = hydrate(source)
  return (
    <div className="container lg:w-2/3 space-y-10 flex-col pb-8">
    {title && <h1 className="text-3xl">{title}</h1>}
    {video_link &&  <div className="youtube-container"><iframe src={video_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>}
    {image && <img className="rounded-full w-1/2 m-auto" src={image} />}
    <div className="prose space-y-8 mx-auto">
    {content}
  </div>
  </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map(it => "/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)
  const slug = params.page as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
  });
  const mdxSource = await renderToString(content, { components, scope: data });
  return {
    props: {
      title: data.title,
      // dateString: data.date,
      // slug: data.slug,
      // description: "",
      // tags: data.tags,
      // author: data.author,
      image: data.thumbnail,
      video_link: data.video_link,
      source: mdxSource
    },
  };
};

