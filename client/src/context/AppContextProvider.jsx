import PropTypes from "prop-types";
import { AppContext } from "./AppContext";

export const AppContextProvider = ({ children }) => {
  const value = {};

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};