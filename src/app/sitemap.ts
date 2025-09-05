import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllPostFileNames } from "../utils/function/getAllPostFileNames";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const posts = await getAllPost();
  const postUrls = posts.map((slug) => {
    return {
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
    };
  });
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}

const getAllPost = async () => {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const filenames = getAllPostFileNames(postsDirectory);

  const slugs = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data.slug as string;
  });

  return slugs;
};
