import React, { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "5ba4cdfdfc82f52ffce8d708c27d24dd";
  const [weatherData, setweatherData] = useState([{}]);
  const [city, SetCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setweatherData(data);
          SetCity("");
        });
    }
  };

  function ImageChange() {
    switch (weatherData.weather[0].description) {
      case "clear sky":
        return (
          <div>
            <img src="Images/clearsky.png" className="image" alt="clear sky"></img>
          </div>
        );
        break;
      case "clouds":
        return (
          <div>
            <img src="Images/clouds.png" className="image" alt="clear sky"></img>
          </div>
        );
        break;
      case "few clouds":
        return (
          <div>
            <img src="Images/fewclouds.png" className="image" alt="few clouds"></img>
          </div>
        );
        break;
      case "overcast clouds":
        return (
          <div>
            <img
              src="Images/overcastclouds.png"
              className="image"
              alt="overcast clouds"
            ></img>
          </div>
        );
        break;
      case "scattered clouds":
        return (
          <div>
            <img
              src="Images/scatteredclouds.png"
              className="image"
              alt="scattered clouds"
            ></img>
          </div>
        );
        break;
      case "broken clouds":
        return (
          <div>
            <img
              src="Images/scatteredclouds.png"
              className="image"
              alt="broken clouds"
            ></img>
          </div>
        );
        break;
      case "drizzle":
        return (
          <div>
            <img src="Images/drizzle.png" className="image" alt="drizzle"></img>
          </div>
        );
        break;
      case "rain":
        return (
          <div>
            <img src="Images/rain.png" className="image" alt="rain"></img>
          </div>
        );
        break;
      case "light rain":
        return (
          <div>
            <img src="Images/rain.png" className="image" alt="rain"></img>
          </div>
        );
        break;
      case "shower rain":
        return (
          <div>
            <img
              src="Images/showerrain.png"
              className="image"
              alt="shower rain"
            ></img>
          </div>
        );
        break;
      case "thunderstorm":
        return (
          <div>
            <img
              src="Images/thunderstorm.png"
              className="image"
              alt="thunderstorm"
            ></img>
          </div>
        );
        break;
      case "snow":
        return (
          <div>
            <img src="Images/snow.png" className="image" alt="snow"></img>
          </div>
        );
        break;
      case "light snow":
        return (
          <div>
            <img src="Images/snow.png" className="image" alt="snow"></img>
          </div>
        );
        break;
      case "mist":
        return (
          <div>
            <img src="Images/mist.png" className="image" alt="mist"></img>
          </div>
        );
        break;
        case "haze":
        return (
          <div>
            <img src="Images/haze.png" className="image" alt="mist"></img>
          </div>
        );
        break;
      default:
        return (
          <div>
            Unexpected outcome.
          </div>
        );
        break;
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="navbar">
          <input
            className="input"
            placeholder="Enter city..."
            onChange={(e) => SetCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
          ></input>
        </div>

        {weatherData.cod === "404" ? (
          <div>
            <img src="Images/error.png" className="image" alt="error" />
            <p className="not-found">City not found.</p>
          </div>
        ) : (
          <></>
        )}
        {typeof weatherData.main === "undefined" ? (
          <div className="welcome-message">
            <img src="Images/weather.png" className="image error-image" alt="default" />
            <p className="welcome">Welcome to Weather App!</p>
          </div>
        ) : (
          <div className="weather-data">
            <span>
              <p className="city">
                {weatherData.sys.country} {weatherData.name}
              </p>
              <p className="Images">
                <ImageChange />
              </p>
            </span>
            <span className="info1">
              <p className="temp">
                {Math.round((weatherData.main.temp - 32) / 1.8)}°
              </p>
              <p className="weather">{weatherData.weather[0].main}</p>
            </span>
            <span className="info2">
              <span className="min-max-temp">
                Min▼
                {Math.round((weatherData.main.temp_min - 32) / 1.8)}°
              </span>
              <span className="min-max-temp">
                Max▲
                {Math.round((weatherData.main.temp_max - 32) / 1.8)}°
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
