import "./App.css";

import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

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
      <Header category={""} logo={""} text={""} />

      <main>
        {dataNews.news.map((el, index) => {
          return (
            <h1 key={index}>
              {el["title"]}
              <Card
                title={el["title"]}
                category={el["category"]}
                date={el["date"]}
                images={el["images"]}
                text={el["text"]}
              ></Card>
            </h1>
          );
        })}
      </main>
    </div>
  );
}

export default App;
