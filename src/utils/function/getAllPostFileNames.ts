import { glob } from "glob";

export const getAllPostFileNames = (postsDirectory: string) => {
  const pattern = "**/*.md";
  const ignorePattern = "**/**/images/**";
  const options = { cwd: postsDirectory, ignore: ignorePattern };
  const filenames = glob.sync(pattern, options);
  return filenames;
};
