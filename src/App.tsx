import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main";
import router from "./router";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
