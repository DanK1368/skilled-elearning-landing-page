import "./Features.scss";
import Card from "../shared/Card";
import AnimationIcon from "../../assets/icon-animation.svg";
import DesignIcon from "../../assets/icon-design.svg";
import PhotographyIcon from "../../assets/icon-photography.svg";
import CryptoIcon from "../../assets/icon-crypto.svg";
import BusinessIcon from "../../assets/icon-business.svg";

const features = [
  {
    id: 1,
    img: AnimationIcon,
    title: "Animation",
    text: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    id: 2,
    img: DesignIcon,
    title: "Design",
    text: " Create beautiful, usable interfaces to help shape the futrue of how the web looks.",
  },
  {
    id: 3,
    img: PhotographyIcon,
    title: "Photography",
    text: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
  },
  {
    id: 4,
    img: CryptoIcon,
    title: "Crypto",
    text: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
  },
  {
    id: 5,
    img: BusinessIcon,
    title: "Business",
    text: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  },
];

function Features() {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__header">
          <h2>Check out our most popular courses!</h2>
        </div>
        {features.map(feature => (
          <Card key={features.id} {...feature} />
        ))}
      </div>
    </section>
  );
}
export default Features;
