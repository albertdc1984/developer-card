export default function SkillList(props) {
  return (
    <div className="skill-list">
      {props.list.map((skill) => (
        <p className="skill" style={{ backgroundColor: `${skill.color}` }}>
          {skill.name}
          <span role="img">{skill.emoji}</span>
        </p>
      ))}
    </div>
  );
}
