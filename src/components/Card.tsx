import "./Card.css";

interface CardProps {
  title: string;
  category: string;
  date: string;
  images: string[];
  text: string;
}

function Card(props: CardProps) {
  return (
    <figure className="card">
      <img src={props.images[0]} alt={props.title} />
      <figcaption>
        <label className="category">{props.category}</label>
        <label className="date">{props.date}</label>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </figcaption>
    </figure>
  );
}
export default Card;
