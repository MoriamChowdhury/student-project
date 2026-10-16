

function StudentCard({ id, name, age, department, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <div className="student-emoji">🎓</div>

      <h2>{name}</h2>

      <div className="student-info">
        <p>🎂 <strong>Age:</strong> {age}</p>
        <p>📚 <strong>Department:</strong> {department}</p>
        <p>🆔 <strong>Student ID:</strong> {id}</p>
      </div>

      <div className="student-actions">
        <button
          className="action-button edit-button"
          onClick={() => onEdit(id)}
        >
          ✏️ Edit
        </button>

        <button
          className="action-button delete-button"
          onClick={() => onDelete(id)}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;




























// function StudentCard({ id, name, age, department, onEdit, onDelete }) {
//     return (
//         <div>
//             <h2>Name: {name}</h2>
//             <p>Age: {age}</p>
//             <p>Department: {department}</p>

//             <button onClick={() => onEdit(id)}>
//                 Edit
//             </button>

//             <button onClick={() => onDelete(id)}>
//                 Delete
//             </button>


//         </div>
//     );
// }

// export default StudentCard;