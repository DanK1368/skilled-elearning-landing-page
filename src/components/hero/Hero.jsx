import "./Hero.scss";
import Button from "../shared/Button";
import Hero_Mobile_Img from "../../assets/image-hero-mobile@2x.png";
import Hero_Tablet_Img from "../../assets/image-hero-tablet@2x.png";
import Hero_Desktop_Img from "../../assets/image-hero-desktop@2x.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__text-container">
        <h1>Maximize skill, minimize budget</h1>
        <p>
          Our modern courses accross a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <Button btnType="button--main" />
      </div>
      <picture className="hero__img-container">
        <source
          srcSet={(`${Hero_Tablet_Img} 1390w`, `${Hero_Desktop_Img} 2090w`)}
          media="(min-width: 650px), 100vw, (min-width: 1024px), 100vw"
        />
        <img className="hero__img" src={Hero_Mobile_Img} alt="" />
      </picture>
    </section>
  );
}
export default Hero;
