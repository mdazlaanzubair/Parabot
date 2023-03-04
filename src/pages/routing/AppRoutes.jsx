import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../About";
import Home from "../Home";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Summarizer from "../Summarizer";
import Toaster from "../components/helper/Toaster";
import SummaryProvider from "../../context/summary/SummaryContext";
import Spinner from "../components/helper/Spinner";
import { useLoader } from "../../context/LoaderContext";

const AppRoutes = () => {
  const { isLoading } = useLoader();

  return (
    <div className="min-h-screen min-w-screen mx-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/summarizer"
            element={
              <SummaryProvider>
                <Summarizer />
              </SummaryProvider>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
      {isLoading ? <Spinner /> : ""}
    </div>
  );
};

export default AppRoutes;
