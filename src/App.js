import "./App.css";
import Context from "./context/Context";
import Home from "./components/Home/Home";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontFamily: "Gloria Hallelujah",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Context>
        <Home />
      </Context>
    </ThemeProvider>
  );
}

export default App;
