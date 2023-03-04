import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = { isLoading, setIsLoading };
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};

export default LoaderProvider;
