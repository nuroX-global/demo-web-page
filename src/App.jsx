import "./App.css";
import Home from "./views/Home";
import Box from "@mui/material/Box";
import AboutUs from "./views/AboutUs";
import AppNavBar from "./components/AppNavBar";
import { createTheme, ThemeProvider} from '@mui/material/styles';

function App() {
  const theme = createTheme({
    typography:{
      "fontFamily": "nurox",
      "fontsize": 14
    }
  });
  return (
    <ThemeProvider
      theme={theme}
    >
      <AppNavBar />
      <Box>
        <Home />
        <AboutUs />
      </Box>
    </ThemeProvider>
  );
}

export default App;
