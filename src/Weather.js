import React from "react";
import "./Weather.css";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: "14",
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "cloud.png",
    humidity: "80",
    wind: "10",
  };

  return (
    <div className="Weather">
      {/* <div className="weatherApp"> */}
      <button className="themeButton">Change Theme</button>

      <form className="searchForm mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              autocomplete="off"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btnSearch w-100"
              value="Search"
            />
          </div>
        </div>
      </form>

      {/* <div className="weatherInfo"> */}
      <div className="overview mb-3">
        <div className="row">
          <div className="col-5 text-capitalize">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Last update: {weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>

          <div className="col-7 overviewDetails">
            <div className="row">
              <div className="overviewIcon col">
                <img src={weatherData.imgUrl} alt={weatherData.description} />
              </div>

              <div className="weatherTemp col">
                <span className="temperature">
                  <strong>{weatherData.temperature}</strong>
                </span>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="containerFluid text-center weatherBoxes">
        <div className="row">
          <div className="col weatherBox mb-3">
            <div className="boxIcon">
              <i className="fa-solid fa-temperature-three-quarters"></i>
            </div>
            <h5>Feels like</h5>
            12°
          </div>

          <div className="col weatherBox mb-3">
            <div className="boxIcon">
              <i className="fa-solid fa-droplet"></i>
            </div>
            <h5>Humidity</h5>
            {weatherData.humidity}%
          </div>
        </div>

        <div className="row">
          <div className="col weatherBox mb-3">
            <div className="boxIcon">
              <i className="fa-solid fa-wind"></i>
            </div>
            <h5>Wind</h5>
            {weatherData.wind} m/s
          </div>
          <div className="col weatherBox mb-3">
            <div className="col">
              <div className="boxIcon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h5>Visibility</h5>
              10km
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
