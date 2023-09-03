import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
import "./styles.css";

const skillsArr = [
  { name: "javaScript", emoji: `${"\u270A"}`, color: "blue" },
  { name: "Sass", emoji: `${"\u270C"}`, color: "yellow" },
  { name: "React", emoji: `${"\u2728"}`, color: "green" },
  { name: "Node", emoji: `${"\u2728"}`, color: "orangered" },
  { name: "Git", emoji: `${"\u270C"}`, color: "cyan" },
  { name: "Jest", emoji: `${"\u270A"}`, color: "red" }
];

function App() {
  return (
    <div className="card">
      <Avatar imgRoute="photo.jpg" imgName="Henoc & Albert" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList list={skillsArr} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
