import { useTheme } from "./context/ThemeContext";
import AppRoutes from "./pages/routing/AppRoutes";

function App() {
  const { theme } = useTheme();

  return (
    <div className="App" data-theme={theme}>
        <AppRoutes />
    </div>
  );
}

export default App;
