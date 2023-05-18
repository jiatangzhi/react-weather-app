import React from "react";
import axios from 'axios';
import "./Weather.css";


export default function Weather() {
  /*  let weatherData = {
    city: "London",
    temperature: "14",
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "cloud.png",
    humidity: "80",
    wind: "10",
  }; */

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

      <h1>London</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img src="pic.png" alt="Mostly cloudy" className="float-left" />
            <div>
              <div className="float-left">
                <span className="temperature">6</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li> Wind: 13km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
