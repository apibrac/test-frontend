import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

import logo from "./logo-pass-culture.svg";

function App() {
  const [dataNews, setDataNews] = useState({ news: [] });

  useEffect(() => {
    fetch("data/news.json")
      .then((response) => response.json())
      .then((data) => {
        setDataNews(data);

        console.log("fetch");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div id="select">
          <label htmlFor="pet-select">Choose a pet:</label>
          <select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
          <label htmlFor="pet-select">Choose a pet:</label>
          <select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>
        <div id="news">
          {dataNews.news.map((el, index) => {
            return (
              <Card
                key={index}
                title={el["title"]}
                category={el["category"]}
                date={el["date"]}
                images={el["images"]}
                text={el["text"]}
              ></Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
