import { ThemeProvider } from "@mui/material";
import "./App.css";
import MainPage from "./pages/main";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
