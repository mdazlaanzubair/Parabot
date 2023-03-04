import { createContext, useContext, useState } from "react";
// getting helper functions
import { textAnalyzer, summarizeIt } from "./helperFunctions";

const SummaryContext = createContext();

export const useSummary = () => useContext(SummaryContext);

const SummaryProvider = ({ children }) => {
  const [summarized, setSummarized] = useState(
    "The quick brown fox jumps over the lazy dog. The quick brown fox runs away from the lazy dog."
  );

  const value = {
    summarized,
    setSummarized,
    textAnalyzer,
    summarizeIt,
  };
  return (
    <SummaryContext.Provider value={value}>{children}</SummaryContext.Provider>
  );
};

export default SummaryProvider;
