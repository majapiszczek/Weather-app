import React from "react";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <form>
        <input type="search" placeholder="Enter a city.." />
        <button>°C</button>
        <button>°F</button>
      </form>
      <div>
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
