import React from "react";
import "./WeatherDisplay.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Icons from "./Icons";
import Time from "./Time";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <h1>{props.data.city}</h1>
      <div className="icon">
        {" "}
        <Icons dataIcon={props.data.icon} alt={props.data.overview} size={52} />
      </div>
      <h3>
        {props.data.overview}, {Math.round(props.data.temperature)}°C
      </h3>{" "}
      <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
        <li>Real Feel: {Math.round(props.data.realFeel)}°C</li>
      </ul>
      <div className="time">
        Last updated at{" "}
        <span>
          {" "}
          <Time dataDate={props.data.date} />
        </span>
      </div>
    </div>
  );
}
