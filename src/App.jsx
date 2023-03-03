import Footer from "./pages/layout/Footer";
import Header from "./pages/layout/Header";
import AppRoutes from "./pages/routing/AppRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container min-h-screen min-w-screen mx-auto bg-indigo-300">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
