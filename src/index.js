// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline"; // Import CssBaseline
import GlobalStyles from "./styles/globalStyles"; // Import global styles if using styled-components
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <CssBaseline /> {/* Apply Material-UI global styles */}
    <GlobalStyles /> {/* Apply styled-components global styles */}
    <App />
  </React.StrictMode>
  </BrowserRouter>
  
);
