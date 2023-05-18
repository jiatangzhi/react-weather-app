import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState("{ ready:false }");
  function handleResponse(response) {
    setWeatherData ({
      ready: true,
      temperaure: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind : response.data.main.speed,
      description: response.data.weather[0].description,
      iconUrl: "sd.png",
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row mt-3">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
            </li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
              <div>
                <div className="float-left">
                  <span className="temperature">{Math.round(weatherData.temperaure)}</span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li> Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
} else {
  const apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "loading";
}
