import "./Button.scss";

function Button({ btnType }) {
  return <button className={`button ${btnType}`}>Get Started</button>;
}
export default Button;
