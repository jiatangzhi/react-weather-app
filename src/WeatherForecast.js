import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div className="WeatherForecast-temperatures">
                        <div className="WeatherForecast-temperature-max"></div>
                        <div className="WeatherForecast-temperature-min"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}