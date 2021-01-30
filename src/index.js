import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyles } from "./global-styles";

import { ContextProvider } from './context/globalContext';

import App from "./app"

ReactDOM.render(
    <ContextProvider>
        <GlobalStyles />
        <App />
    </ContextProvider>
,document.getElementById("root"));