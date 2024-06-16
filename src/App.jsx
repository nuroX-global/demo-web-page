import "./App.css";
import Home from "./views/Home";
import Box from "@mui/material/Box";
import AboutUs from "./views/AboutUs";
import AppNavBar from "./components/navigation/AppNavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./components/navigation/AppRouter";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "nurox",
      fontsize: 14,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppNavBar />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
