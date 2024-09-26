/** @format */

import { create } from "zustand";

interface HeaderSearchType {
  isSearch: boolean;
  setIsSearch: (value: boolean) => void;
}

const useHeaderSearch = create<HeaderSearchType>((set) => ({
  isSearch: false,
  setIsSearch: (newValue) =>
    set(() => ({
      isSearch: newValue,
    })),
}));

export default useHeaderSearch;
