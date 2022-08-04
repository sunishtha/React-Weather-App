import React, { useState, useEffect } from "react";
import "./Weather.css";

export default function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState("Goa");

  const date = new Date().toLocaleString();
  useEffect(() => {
    const newFetch = async () => {
      const resolve = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=1b7bd9f23e0bc9b289521d9a63aa9757`
      );

      const rejec = await resolve.json();
      setCity(rejec.main, rejec.weather, rejec.temp);
    };
    newFetch();
  });

  return (
    <div className="outer">
      <h1>Weather App</h1>

      <div className="out">
        <p>{date}</p>
        <input
          onChange={(e) => {
            setData(e.target.value);
          }}
          value={data}
          type="search"
          placeholder="Type here..."
        />

        {!city ? (
          <p>NOT FOUND</p>
        ) : (
          <div >
            <h1>{data}</h1>
            <h1>{city.temp} °C </h1>
            <p>
              {city.temp_min}°C  /  {city.temp_max}°C 
            </p>
            <p>HUMIDITY {city.humidity} %</p>
            <h4>{city.name}</h4>
          </div>
        )}
      </div>
    </div>
  );
}