/** @format */

import { create } from "zustand";

interface HeaderSearchType {
  isSearch: boolean;
  isCategory: boolean;
  setIsSearch: (value: boolean) => void;
  setIsCategory: (value: boolean) => void;
}

const useHeaderSearch = create<HeaderSearchType>((set) => ({
  isSearch: false,
  isCategory: false,
  setIsSearch: (newValue) =>
    set(() => ({
      isSearch: newValue,
    })),

  setIsCategory: (newValue) =>
    set(() => ({
      isCategory: newValue,
    })),
}));

export default useHeaderSearch;
