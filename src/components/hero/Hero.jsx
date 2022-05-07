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
      <div className="hero__img-container">
        <img
          className="hero__img"
          src={Hero_Mobile_Img}
          srcSet={`${Hero_Mobile_Img} 650w, ${Hero_Tablet_Img} 1300w, ${Hero_Desktop_Img} `}
          alt=""
        />
      </div>
    </section>
  );
}
export default Hero;
