/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import "./News.css";
import { ChangeEvent, useEffect, useState } from "react";
import Card from "./Card";

function News() {
  const [dataNews, setDataNews] = useState({ news: [] });
  // 2. Nouvelle variable pour stocker les news qui sont filtrées on non
  const [filteredNews, setFilteredNews] = useState([]);
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

  // Ajout d'un useEffect que si dataNews, cat et date ont changé
  // si dataNews à changer c'est qu'on a récupérer les news depuis le json
  // si date à changer c'est que l'utilisateur a choisi une date
  // si cat à changer c'est que l'utilisateur a choisi une catégorie
  useEffect(() => {
    let filtered;
    if (cat && date) {
      filtered = dataNews.news.filter(
        (el) => cat === el["category"] && date === el["date"]
      );
    } else if (cat) {
      filtered = dataNews.news.filter((el) => cat === el["category"]);
    } else if (date) {
      filtered = dataNews.news.filter((el) => date === el["date"]);
    } else {
      //on recupere news dans la variable dataNews
      filtered = dataNews.news;
    }
    setFilteredNews(filtered);
  }, [dataNews, cat, date]);

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
      <div id="news">
        {
          // 1. on affiche que les filteredNews
          filteredNews.map((el, index) => displayCard(el, index))
        }
      </div>
    </main>
  );
}

export default News;
