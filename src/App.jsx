import React, { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;

    const response = await fetch(
      `https://wttr.in/${city}?format=j1`
    );

    const data = await response.json();

    setWeather(data.current_condition[0]);
  };

  return (
    <div
      style={{
         // minHeight: "0%",
         // background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         padding: "20px",
         marginTop:"100px"
      }}
    >
      <div
        style={{
          background: "rgba(100,200,300,40)",
          padding: "30px",
          borderRadius: "20px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ color: "#0d6efd" }}>🌤️ Weather App</h2>
        <p>Check your city's weather</p>

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            width: "90%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginBottom: "15px",
          }}
        />

        <button
          onClick={getWeather}
          style={{
            width: "95%",
            padding: "12px",
            background: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Check Weather
        </button>

        {weather && (
          <div style={{ marginTop: "25px" }}>
            <h3>{city}</h3>
            <h1>🌡️ {weather.temp_C}°C</h1>
            <h4>{weather.weatherDesc[0].value}</h4>
            <p>💧 Humidity: {weather.humidity}%</p>
            <p>💨 Wind: {weather.windspeedKmph} km/h</p>
            <p>🌡️ Feels Like: {weather.FeelsLikeC}°C</p>
          </div>
        )}
      </div>
    </div>
  );
}