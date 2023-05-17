import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Weather defaultCity="London" /> */}

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.jxtangzhi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jia Xin Tang Zhi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/jiatangzhi/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
