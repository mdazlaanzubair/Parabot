import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useSummary } from "../context/summary/SummaryContext";
import SummarizerForm from "./components/summarizer/SummarizerForm";
import TextAnalyzeResults from "./components/summarizer/TextAnalyzeResults";

const Summarizer = () => {
  const { summarized, textAnalyzer } = useSummary();
  const [analyzedResults, setAnalyzedResults] = useState(null);

  useEffect(() => console.log(analyzedResults), [analyzedResults]);

  return (
    <section className="min-h-screen py-20 px-5 bg-base-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <div className="form-control mb-3">
            <label htmlFor="summarized" className="text-2xl mb-3 font-bold">
              Summarized Text
            </label>
            <p>{summarized}</p>
          </div>
          <div className="control-panel mb-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <button
                className="btn btn-success"
                onClick={() => setAnalyzedResults(textAnalyzer(summarized))}
              >
                Analyze Text
              </button>
              <CopyToClipboard
                text={summarized}
                onCopy={() =>
                  toast.success("Copied!", { position: "top-right" })
                }
              >
                <button className="btn btn-outline btn-active">
                  Copy Text
                </button>
              </CopyToClipboard>
              <button
                className="btn btn-ghost border-2 border-slate-200"
                disabled
              >
                Save
              </button>
            </div>
          </div>
          {analyzedResults && (
            <div className="result-panel">
              <TextAnalyzeResults analyzedResults={analyzedResults} />
            </div>
          )}
        </div>
        <div className="">
          <SummarizerForm />
        </div>
      </div>
    </section>
  );
};

export default Summarizer;
