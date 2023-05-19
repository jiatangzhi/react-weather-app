import React, { useState } from "React";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = setUse("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
      return (props.celius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <a href="/" onClick={displayFahrenheit}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit">
          <a href="/" onClick={displayCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
