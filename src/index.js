import { SpeechProvider } from "@speechly/react-client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./context/context";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="b82a99bc-8eb7-4068-ba32-cbf37e79ae1a" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
