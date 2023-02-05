import "./Card.css";

function Card() {
  return (
    <div className="card">
      <figure>
        <img src="/images/cannes1.jpg" alt="TITRE" />
        <figcaption>
          <label className="category">EVENEMENT</label>
          <label className="dtae">12/12/2023</label>
          <h2>Titre</h2>
          <p>lalalalalalalalalla</p>
        </figcaption>
      </figure>
    </div>
  );
}
export default Card;
