import "./Card.css";

function Card() {
  return (
    <figure className="card">
      <img src="./images/cannes1.jpg" alt="TITRE" />
      <figcaption>
        <label className="category">EVENEMENT</label>
        <label className="date">12/12/2023</label>
        <h2>Titre</h2>
        <p>lalalalalalalalalla</p>
      </figcaption>
    </figure>
  );
}
export default Card;
