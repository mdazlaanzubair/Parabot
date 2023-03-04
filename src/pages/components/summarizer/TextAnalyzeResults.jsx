import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const TextAnalyzeResults = ({ analyzedResults }) => {
  return (
    <>
      <table className="table w-full table-compact my-6">
        <thead>
          <tr className="hover">
            <th>#</th>
            <th>Desc</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                />
              </svg>
            </th>
            <th>No. of characters</th>
            <td>{analyzedResults?.counts?.chars}</td>
          </tr>
          <tr className="hover">
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
            </th>
            <th>No. of words</th>
            <td>{analyzedResults?.counts?.words}</td>
          </tr>
          <tr className="hover">
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1. 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </th>
            <th>No. of sentences</th>
            <td>{analyzedResults?.counts?.sentences}</td>
          </tr>
          <tr className="hover">
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </th>
            <th>Reading time</th>
            <td>{analyzedResults?.readTime} min(s)</td>
          </tr>
          <tr className="hover">
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
            </th>
            <th colSpan={2}>Frequent Words</th>
          </tr>
          <tr>
            <th></th>
            <td colSpan={2}>
              <div className="flex flex-wrap">
                {analyzedResults?.wordFrequencies?.frequent?.map(
                  (item, index) => (
                    <CopyToClipboard
                      text={item.word}
                      onCopy={() =>
                        toast.success("Copied!", { position: "top-right" })
                      }
                    >
                      <button
                        key={index}
                        className="btn btn-sm btn-ghost mr-2 mb-2"
                      >
                        {item.word}
                        <div className="badge badge-accent ml-2">+{item.frequency}</div>
                      </button>
                    </CopyToClipboard>
                  )
                )}
              </div>
            </td>
          </tr>
          <tr className="hover">
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
            </th>
            <th colSpan={2}>Not Frequent Words</th>
          </tr>
          <tr>
            <th></th>
            <td colSpan={2}>
              <div className="flex flex-wrap">
                {analyzedResults?.wordFrequencies?.notFrequent?.map(
                  (word, index) => (
                    <CopyToClipboard
                      text={word}
                      onCopy={() =>
                        toast.success("Copied!", { position: "top-right" })
                      }
                    >
                      <button
                        key={index}
                        className="btn btn-sm btn-ghost mr-2 mb-2"
                      >
                        {word}
                      </button>
                    </CopyToClipboard>
                  )
                )}
              </div>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr className="hover">
            <th>#</th>
            <th>Desc</th>
            <th>Results</th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default TextAnalyzeResults;
