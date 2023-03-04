import FunkyText from "./components/helper/FunkyText";

const Home = () => {
  return (
    <section className="min-h-screen py-20 px-5">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="flex m-3">
          <div className="max-w-md">
            <img
              className="rounded-box"
              src="https://qwizbot.netlify.app/assets/about-img-9d34ec02.png"
            />
          </div>
        </div>
        <div className="flex-1 m-3">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
              Are you tired of sifting through pages of text to find the
              information you need?
            </h1>
            <p className="mb-5 text-lg lg:text-2xl">
              Look no further! This AI-powered software simplifies the process
              by finding answers and summarizing text quickly and efficiently.
            </p>
            <p className="mb-5 text-lg lg:text-2xl">
              Take your productivity to the next level with{" "}
              <FunkyText text="Parabot!" />
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
