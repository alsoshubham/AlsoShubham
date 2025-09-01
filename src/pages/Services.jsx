import "./Service.css"; // we'll add custom keyframes here for smooth scrolling

const productManagement = [
  "MVP",
  "Roadmap",
  "Backlog",
  "Sprint",
  "User Story",
  "Epic",
  "Persona",
  "Customer Journey Map",
  "KPIs",
  "OKRs",
  "Churn Rate",
  "CAC",
  "LTV",
  "North Star Metric",
  "Product-Market Fit",
  "A/B Testing",
  "NPS",
  "Changelog",
  "Go-to-Market Strategy",
  "Stakeholder Management",
];

const softwareEngineering = [
  "SDLC",
  "OOP",
  "Data Structures & Algorithms",
  "System Design",
  "API Development",
  "Cloud Computing",
  "Microservices",
  "Agile & Scrum",
  "CI/CD",
  "TDD",
  "Git",
  "Code Optimization",
  "Security",
  "Scalability",
  "SQL/NoSQL",
  "DevOps",
  "Debugging",
  "Software Architecture",
  "Cross-Platform",
  "Automation",
];

const uxStrategies = [
  "Design Thinking",
  "User Research",
  "Information Architecture",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
  "Journey Mapping",
  "Persona Development",
  "Interaction Design",
  "Accessibility",
  "Human-Centered Design",
  "Content Strategy",
  "Heuristic Evaluation",
  "Visual Hierarchy",
  "UX Metrics",
  "Experience Mapping",
  "Service Design",
  "Stakeholder Workshops",
  "Innovation Strategy",
];

import PropTypes from "prop-types";

const ScrollingRow = ({ items, direction }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-4">
      <div
        className={`flex gap-4 ${
          direction === "right"
            ? "animate-scroll-right"
            : "animate-scroll-left"
        }`}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="px-7 py-3 rounded-full bg-transparent border-2 border-purple-500 text-purple-300 font-semibold text-base hover:bg-purple-600/10 hover:text-white hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

ScrollingRow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
};

const Services = () => {
  return (
    <section className="bg-black text-white py-12">
      <ScrollingRow items={productManagement} direction="right" />
      <ScrollingRow items={softwareEngineering} direction="left" />
      <ScrollingRow items={uxStrategies} direction="right" />
    </section>
  );
};

export default Services;
