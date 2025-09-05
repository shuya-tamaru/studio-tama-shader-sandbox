import { TagsType } from "../utils/tags/tags";

export interface Meta {
  title: string;
  date: string;
  description: string;
  coverImage: string;
  tags: TagsType[] | null;
  slug: string;
}
