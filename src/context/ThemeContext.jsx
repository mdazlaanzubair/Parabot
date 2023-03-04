import { createContext, useContext, useState } from "react";

// initializing "ThemeContext"
const ThemeContext = createContext();

// custom hook for "useContext(ThemeContext)"
export const useTheme = () => useContext(ThemeContext);

// preparing context with values and returning back
const ThemeProvider = ({ children }) => {
  // initializing "ThemeContext" state
  const [theme, setTheme] = useState("bumblebee");

  // set of values, methods, function to be used by "ThemeProvider"
  const value = { theme, setTheme };

  // returning "ThemeContext.Provider" with set of values
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
