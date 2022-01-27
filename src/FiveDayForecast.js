import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FiveDayForecast.css";
import DailyForecastData from "./DailyForecastData";
import axios from "axios";

export default function FiveDayForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="FiveDayForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="day" key={index}>
                <DailyForecastData data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = `9b761912c6d0907fc2545d504bce9a80`;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return <div className="FiveDayForecast">Loading</div>;
  }
}
