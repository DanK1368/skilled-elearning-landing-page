import "./Footer.scss";
import Button from "../shared/Button";
import LogoLight from "../../assets/logo-light.svg";

function Footer() {
  return (
    <footer className="footer">
      <img src={LogoLight} alt="company logo" />
      <Button btnType="button--footer" />
    </footer>
  );
}
export default Footer;
