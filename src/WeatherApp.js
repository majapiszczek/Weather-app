import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";
import ReactLoading from "react-loading";

export default function WeatherApp(props) {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const getResponse = (response) => {
    setLoaded(true);
    setData({
      city: response.data.city,
      description: response.data.condition.description,
      temperatureCelsius: Math.round(response.data.temperature.current),
    });
  };

  const search = () => {
    const apiKey = "8a74ad5eo45tde558fe05997d33ec4b6";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(getResponse);
  };

  if (loaded) {
    return (
      <div className="WeatherApp">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={handleCity}
          />
          <div className="unit-buttons">
            <button className="celsius">°C</button>
            <button className="fahrenheit">°F</button>
          </div>
        </form>
        <div className="main">
          <h2>{data.description}</h2>
          <p>{data.city}</p>
          <h1>{data.temperatureCelsius}°</h1>
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
    search();
    return (
      <div className="loading-icon">
        <ReactLoading
          type={"spinningBubbles"}
          color={"#ffffff"}
          height={"64px"}
          width={"64px"}
        />
      </div>
    );
  }
}
