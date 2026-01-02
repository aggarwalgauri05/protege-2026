import './ProtegeSection.css';
import AboutProtege from "../components/AboutProtege";
import WhyJoinProtege from "./WhyJoinProtege";

const ProtegeSection = () => {
  return (
    <section className="protege-section">

      {/* About Protégé */}
      <AboutProtege />

      {/* Image Gallery */}
      <div className="protege-gallery">
        {/* images go here */}
      </div>

      {/* Why Join Protégé */}
      <WhyJoinProtege />

    </section>
  );
};

export default ProtegeSection;
