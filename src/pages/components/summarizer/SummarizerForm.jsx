import { useState } from "react";
import { useLoader } from "../../../context/LoaderContext";
import { useSummary } from "../../../context/summary/SummaryContext";

const SummarizerForm = () => {
  const { setIsLoading } = useLoader();
  const { summarizeIt, setSummarized } = useSummary();
  const [textInput, setTextInput] = useState();

  const summarizeText = (e) => {
    e.preventDefault();

    // changing loading state
    setIsLoading(true);

    // calling AI function to summarize the input
    summarizeIt(textInput)
      .then((response) => setSummarized(response))
      .catch((err) => console.log(err));

    // changing back the loading state
    setIsLoading(false);
  };

  return (
    <form action="#" onSubmit={summarizeText}>
      <div className="form-control mb-3">
        <label htmlFor="summarized" className="text-2xl mb-3 font-bold">
          Text Summarizer
        </label>
        <textarea
          className="textarea bg-neutral text-neutral-content"
          id="summarized"
          cols="30"
          rows="10"
          placeholder="Paste your here..."
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        ></textarea>
      </div>
      <div className="form-control">
        <button type="submit" className="btn btn-primary btn-block">
          Summarize
        </button>
      </div>
    </form>
  );
};

export default SummarizerForm;
