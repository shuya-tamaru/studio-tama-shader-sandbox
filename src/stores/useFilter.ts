import { create } from "zustand";
import { TagsType } from "../utils/tags/tags";

type FilterState = {
  filter: TagsType[];
  setFilter: (filter: TagsType[]) => void;
  searchTitle: string;
  setSearchTitle: (searchTitle: string) => void;
};

export const useFilter = create<FilterState>((set) => ({
  filter: [],
  setFilter: (filter) => set({ filter }),
  searchTitle: "",
  setSearchTitle: (searchTitle) => set({ searchTitle }),
}));
