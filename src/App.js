import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://meek-malabi-7397e3.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Lesia Shevchuk{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/Lesia-Sh/weather-app-project"
            target="_blank"
            rel="noreferrer noopener"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
