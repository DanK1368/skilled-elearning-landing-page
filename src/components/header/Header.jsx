import "./Header.scss";
import LogoDark from "../../assets/logo-dark.svg";

function Header() {
  return (
    <header className="header">
      <img src={LogoDark} alt="" />
    </header>
  );
}
export default Header;
