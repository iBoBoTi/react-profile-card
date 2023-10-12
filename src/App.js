import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Information />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        className="avatar"
        src="WhatsApp Image 2023-10-12 at 13.43.46.jpeg"
        alt="a person"
      />
    </div>
  );
}

function Information() {
  return (
    <div>
      <h2>Chukwuebuka Iroegbu</h2>
      <p>I am a full stack developer with over 3 years of experience. With experience building fintech products using the below skills.</p>
    </div>
  );
}

function SkillList() {
  const skills = [
    {
      skill: "Html+CSS 👌🏻",
      color: "red"
    },
    {
      skill: "Javascript ✌🏻",
      color: "pink"
    },
    {
      skill: "Golang 🤯",
      color: "orange"
    },
    {
      skill: "React 💪🏻",
      color: "salmon"
    },
    {
      skill: "GCP ☁️",
      color: "cyan"
    },
    {
      skill: "Python 🐍",
      color: "teal"
    },
    {
      skill: "Docker 🐳",
      color: "skyblue"
    }
  ];
  return (
    <div className="skill-list">
      {skills.map((s, key) => (
        <Skill key={key} skill={s.skill} color={s.color} />
      ))}
    </div>
  );
}

function Skill(props) {
  const { skill, color } = props;
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {skill}
    </div>
  );
}
