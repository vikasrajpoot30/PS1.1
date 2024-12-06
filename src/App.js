import "./styles.css";
import { EmpCard } from "./EmpCard.jsx";
export default function App() {
  const name = "Vikas Rajpoot"; // Defined required variables
  const designation = "Software Engineer";
  const experience = "2 years";
  return (
    <div className="App">
      <EmpCard name={name} designation={designation} experience={experience} />
    </div>
  );
}
