import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp() {
  const [loaded, setLoaded] = useState(false);

  const getResponse = (response) => {
    setLoaded(true);
    alert(response.data.city);
  };

  const searchCity = () => {
    const apiKey = "8a74ad5eo45tde558fe05997d33ec4b6";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}`;
    axios.get(apiUrl).then(getResponse);
  };

  if (loaded) {
    return (
      <div className="WeatherApp">
        <form>
          <input type="search" placeholder="Enter a city.." />
          <div className="unit-buttons">
            <button className="celsius">°C</button>
            <button className="fahrenheit">°F</button>
          </div>
        </form>
        <div className="main">
          <h2>cloudy</h2>
          <p>chicago</p>
          <h1>20°</h1>
        </div>
        <div>
          <div>
            <h3>mon</h3>
            <p>icon</p>
            <h4>10°</h4>
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
    return "loading..";
  }
}
