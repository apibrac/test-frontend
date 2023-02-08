import "./App.css";
import React, { ChangeEvent, useEffect, useState } from "react";
import Card from "./components/Card";

import logo from "./logo-pass-culture.svg";

function App() {
  const [dataNews, setDataNews] = useState({ news: [] });
  const [cat, setCat] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch("data/news.json")
      .then((response) => response.json())
      .then((data) => {
        setDataNews(data);

        console.log("fetch");
      });
  }, []);

  const catChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
    setCat(e.currentTarget.value);
  };

  const dateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDate(e.currentTarget.value);
  };

  const displayCard = (el: any, index: number) => {
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
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div id="select">
          <label htmlFor="cat-select">Catégorie:</label>
          <select name="cat" id="cat-select" onChange={catChange}>
            <option value="">--Option--</option>
            <option value="Évènement">Évènement</option>
            <option value="Utilisateurs">Utilisateurs</option>
            <option value="Au bureau">Au bureau</option>
            <option value="Acteurs culturels">Acteurs culturels</option>
            <option value="Ambassadeurs">Ambassadeurs</option>
          </select>

          <label htmlFor="date-select">Date:</label>
          <select name="date" id="date-select" onChange={dateChange}>
            <option value="">--Option--</option>
            <option value="2022-06-07">2022-06-07</option>
            <option value="2022-06-06">2022-06-06</option>
            <option value="2022-06-03">2022-06-03</option>
            <option value="2022-06-02">2022-06-02</option>
            <option value="2022-05-31">2022-05-31</option>
            <option value="2022-05-25">2022-05-25</option>
          </select>
        </div>
        <div>
          <button id="addNews">Ajouter news</button>
        </div>
        <div id="news">
          {dataNews.news.map((el, index) => {
            if (cat && date) {
              if (cat === el["category"] && date === el["date"]) {
                return displayCard(el, index);
              }
            } else if (cat || date) {
              if (cat && cat === el["category"]) {
                return displayCard(el, index);
              }
              if (date && date === el["date"]) {
                return displayCard(el, index);
              }
            } else {
              return displayCard(el, index);
            }
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
