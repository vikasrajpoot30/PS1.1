// EmployeeCard.jsx
export function EmpCard({ name, designation, experience }) {
  return (
    <div className="app-body">
      <h1>Employee Details</h1>
      <p>Name: {name}</p>
      <p style={{ color: "green" }}>Designation: {designation}</p>
      <p style={{ color: "blue" }}>Experience: {experience}</p>
    </div>
  );
}
