import React from "react";
import { useState, useEffect } from "react";
const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8be266295d016fc18ef7c028960815a8
        `;
      const response = await fetch(url);
      const resJson = await response.json();
    //   console.log(resJson.main);
      setCity(resJson.main);
    };
    fetchapi();
  }, [search]);

  return (
    <>
      <div>
        <div className="input">
          <input
            type="search"
            name="search"
            id="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <h2>not found</h2>
        ) : (
          <div className="info">
            <p>city : {search}</p>
            <p>temp : {city.temp}</p>
            <p>min</p>
            <p>max</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
