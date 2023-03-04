import { createContext, useContext, useState } from "react";

// initializing "AuthContext"
const AuthContext = createContext();

// custom hook for "useContext(AuthContext)"
export const useAuth = () => useContext(AuthContext);

// preparing context with values and returning back
const AuthProvider = ({ children }) => {
  // initializing "AuthContext" state
  const [isAuth, setIsAuth] = useState(true);

  // set of values, methods, function to be used by "AuthProvider"
  const value = { isAuth, setIsAuth };

  // returning "AuthContext.Provider" with set of values
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
