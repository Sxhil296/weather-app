import React from "react";
import axios from "axios";

function App() {


  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=62a4b1e49b868663d831f6b8ca9df326`

  return (
    <div className="App">
    <div className="container">
      <div className="top">
        <div className="location">
          <p>Delhi</p>
        </div>
        <div className="temp">
          <h1>65F</h1>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p>60F</p>
        </div>
        <div className="humidity">
          <p>20%</p>
        </div>
        <div className="wind">
          <p>12 KMH</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
