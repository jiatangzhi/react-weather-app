import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response.data) {

    }

    let apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)

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


