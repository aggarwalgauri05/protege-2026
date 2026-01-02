import "./AboutProtege.css";
import {
  FiUsers,
  FiTrendingUp,
  FiCompass,
  FiTarget,
  FiCode,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

const pillars = [
  {
    title: "Connect",
    text: "Build meaningful relationships with experienced mentors and ambitious peers.",
    icon: <FiUsers />,
  },
  {
    title: "Grow",
    text: "Develop technical and professional skills through guided mentorship.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Navigate",
    text: "Chart your career path with personalized guidance and support.",
    icon: <FiCompass />,
  },
];

const roadmap = [
  { title: "Mentorship", icon: <FiTarget />, text: "1:1 and group mentorship" },
  { title: "Upskilling", icon: <FiCode />, text: "Workshops & bootcamps" },
  { title: "Collaboration", icon: <FiLayers />, text: "Peer learning & projects" },
  { title: "Progress", icon: <FiCheckCircle />, text: "Goal tracking" },
];

const AboutProtege = () => {
  return (
    <section className="about-protege">
      <p className="about-tag">ABOUT</p>

      <h2 className="about-title">
        Empowering Women in Tech Through Mentorship
      </h2>

      <p className="about-subtitle">
        Protégé is the premier mentorship society at IGDTUW, fostering growth,
        leadership, and technical excellence through meaningful mentor–mentee
        relationships.
      </p>

      {/* PILLARS — DO NOT REMOVE */}
      <div className="about-pillars">
        {pillars.map((item, i) => (
          <div className="pillar-card" key={i}>
            <span className="pillar-top-line"></span>
            <div className="pillar-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* TIMELINE */}
      <div className="about-roadmap">
        <h3>Our Plan of Action</h3>

        <div className="roadmap-timeline">
          <span className="timeline-base"></span>

          {roadmap.map((step, i) => (
            <div className="roadmap-step" key={i}>
              <span className="timeline-dot"></span>
              <div className="roadmap-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProtege;
