import "./App.css";

import React, { useEffect, useState } from "react";
import logo from "./logo-pass-culture.svg";

//import dataNews from "./news.json";

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
        {dataNews.news.map((el, index) => {
          return <h1 key={index}>{el["title"]}</h1>;
        })}
      </main>
    </div>
  );
}

export default App;
