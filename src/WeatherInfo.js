import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row row-container">
        <div className="col-sm-6 d-flex justify-content-center">
          <div className="d-flex m-3">
            <div>
              <WeatherIcon code={props.data.icon} size={50} />
            </div>
            <div>
              <div>
                <WeatherTemperature celsius={props.data.temperaure} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              Humidity: <span>{props.data.humidity}%</span>
            </li>
            <li>
              Wind: <span>{props.data.wind} m/s</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
