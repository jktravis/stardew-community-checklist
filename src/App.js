import "bootswatch/dist/sandstone/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@emotion/react";
import CheckListContextProvider from "./context/CheckListContext";
import Checklist from "./components/Checklist";
import theme from "./style/theme";
import Global from "./style/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <CheckListContextProvider>
        <Checklist />
      </CheckListContextProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
