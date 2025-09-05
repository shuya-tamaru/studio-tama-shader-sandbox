import { create } from "zustand";

type FilterState = {
  searchShaderTitle: string;
  setSearchShaderTitle: (searchTitle: string) => void;
};

export const useShaderFilter = create<FilterState>((set) => ({
  searchShaderTitle: "",
  setSearchShaderTitle: (searchShaderTitle) => set({ searchShaderTitle }),
}));
