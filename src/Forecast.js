import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [forecast, setForecast] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getForecast = () => {
    const apiKey = "8a74ad5eo45tde558fe05997d33ec4b6";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.dataCity}&key=${apiKey}`;
    axios.get(apiUrl).then(showForecast);
  };

  const showForecast = (response) => {
    // const now = new Date(response.data.daily[0].time * 1000);
    // const day = now.getDay();
    // const days = ("sun", "mon", "tue", "wed", "thu", "fri", "sat");

    setLoaded(true);
    setForecast({
      // day: days[day],
      icon: response.data.daily[0].condition.icon,
      iconUrl: response.data.daily[0].condition.icon_url,
      temperatureCelsius: Math.round(response.data.daily[0].temperature.day),
    });
  };

  if (loaded) {
    return (
      <div className="Forecast">
        {/* <h3>{forecast.day}</h3> */}
        <img src={forecast.iconUrl} alt={forecast.icon} />
        <h4>{forecast.temperatureCelsius}°</h4>
      </div>
    );
  } else {
    getForecast();
    return null;
  }
}
