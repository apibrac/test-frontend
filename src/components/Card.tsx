import "./Card.css";
//import images from "./images/reel1.jpg";
interface CardProps {
  title: string;
  category: string;
  date: string;
  images: string[];
  text: string;
}
//{props.images[0]}
//{ require(props.image).default }
function Card(props: CardProps) {
  return (
    <figure className="card">
      <img
        src={props.images ? props.images[0] : "./images/empty.jpg"}
        alt={props.title}
      />
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
