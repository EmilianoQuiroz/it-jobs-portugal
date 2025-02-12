import PropTypes from "prop-types";
import { AppContext } from "./AppContext";
import { useState } from "react";

export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({ title: '', location: '' });
  const [isSearched, setIsSearched] = useState(false);

  const value = {
    setSearchFilter,
    searchFilter,
    isSearched,
    setIsSearched,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};