import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
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
}
