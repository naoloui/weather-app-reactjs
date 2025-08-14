import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App React.js</h1>
        <Weather defaultCity="Madrid" />

        <footer>
          Coded by
          <a
            href="https://github.com/naoloui/weather-app-reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Naomi L
          </a>
          and is open-sourced on
          <a
            href="https://github.com/naoloui/weather-app-reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          and hosted on
          <a
            href="https://app.netlify.com/projects/meteoapp-reactjs-naoloui/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
