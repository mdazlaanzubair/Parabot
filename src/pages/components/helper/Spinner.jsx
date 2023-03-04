import { Oval } from "react-loader-spinner";
import FunkyText from "./FunkyText";

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center fixed top-0 left-0 bg-neutral text-neutral-content min-w-full min-h-screen z-50 opacity-95">
      <Oval
        height={80}
        width={80}
        color="#ffffff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1f2937"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <h1 className="mt-12 text-2xl lg:text-3xl font-bold">Please Wait!</h1>
      <h1 className="my-3 text-xl lg:text-xl">
        While <FunkyText text="Parabot" /> is processing . . .
      </h1>
    </div>
  );
};

export default Spinner;
