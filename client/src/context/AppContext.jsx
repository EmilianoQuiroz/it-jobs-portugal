import { createContext } from "react";

export const AppContext = createContext({
  setSearchFilter: () => {},
  searchFilter: { title: '', location: '' },
  isSearched: false,
  setIsSearched: () => {},
});