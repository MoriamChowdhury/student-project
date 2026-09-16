function StudentCard({ id, name, age, department, onEdit, onDelete }) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Department: {department}</p>

            <button onClick={() => onEdit(id)}>
                Edit
            </button>

            <button onClick={() => onDelete(id)}>
                Delete
            </button>


        </div>
    );
}

export default StudentCard;