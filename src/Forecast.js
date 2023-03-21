import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [daily, setDaily] = useState(null);

  const getForecast = () => {
    const apiKey = "8a74ad5eo45tde558fe05997d33ec4b6";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.dataCity}&key=${apiKey}`;
    axios.get(apiUrl).then(showForecast);
  };

  const day = (daily) => {
    const now = new Date(daily.time * 1000);
    const today = now.getDay();
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return days[today];
  };

  const showForecast = (response) => {
    setLoaded(true);
    setDaily(response.data.daily);
  };

  useEffect(() => {
    setLoaded(false);
  }, [props.dataCity]);

  if (loaded) {
    return (
      <div className="Forecast">
        {daily.map((daily, index) => {
          if (index < 5) {
            return (
              <div key={index}>
                <h3>{day(daily)}</h3>
                <img
                  src={daily.condition.icon_url}
                  alt={daily.condition.icon}
                />
                <h4>{Math.round(daily.temperature.day)}°</h4>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    getForecast();
    return null;
  }
}
