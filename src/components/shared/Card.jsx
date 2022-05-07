import "./Card.scss";

function Card({ ...feature }) {
  return (
    <div className="card">
      <img className="card__img" src={feature.img} alt="" />
      <h3 className="card__title">{feature.title}</h3>
      <p className="card__text">{feature.text}</p>
      <button className="card__btn">Get Started</button>
    </div>
  );
}
export default Card;
