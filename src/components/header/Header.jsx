import "./Header.scss";
import LogoDark from "../../assets/logo-dark.svg";
import Button from "../shared/Button";

function Header() {
  return (
    <header className="header">
      <img src={LogoDark} alt="company logo" />
      <Button btnType="button--header" />
    </header>
  );
}
export default Header;
