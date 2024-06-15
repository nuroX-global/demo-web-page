import "./App.css";
import Home from "./views/Home";
import Box from "@mui/material/Box";
import AboutUs from "./views/AboutUs";
import AppNavBar from "./components/AppNavBar";

function App() {
  return (
    <div>
      <AppNavBar />
      <Box m={3} pt={1}>
        <Home />
        <AboutUs />
      </Box>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
