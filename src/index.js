import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.css";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div className="container">
        <Weather />
      </div>
    </div>
  </StrictMode>
);
