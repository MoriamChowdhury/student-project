import { useState } from "react";
import StudentCard from "./StudentCard";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Moriam",
      age: 20,
      department: "CSE",
    },
    {
      id: 2,
      name: "Rahim",
      age: 21,
      department: "CSE",
    },
    {
      id: 3,
      name: "Karim",
      age: 22,
      department: "EEE",
    },
    {
      id: 4,
      name: "Nabila",
      age: 20,
      department: "BBA",
    },
  ]);
  const [editId, setEditId] = useState(null);

  const [name, setName] = useState("");
  
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");



  

  const handleAddStudent = () => {
  if (name === "" || age === "" || department === "") {
    alert("Please fill all fields");
    return;
  }
    const newStudent = {
      id: students.length + 1,
      name: name,
      age: Number(age),
      department: department,
    };

    setStudents([...students, newStudent]);

    setName("");
    setAge("");
    setDepartment("");
  };

  const handleDelete = (id) => {
  const updatedStudents = students.filter(
    (student) => student.id !== id
  );

  setStudents(updatedStudents);
};

const handleEdit = (id) => {
  const student = students.find((student) => student.id === id);

  setEditId(id);
  setName(student.name);
  setAge(student.age);
  setDepartment(student.department);
};

const handleUpdate = () => {
  const updatedStudents = students.map((student) => {
    if (student.id === editId) {
      return {
        ...student,
        name: name,
        age: Number(age),
        department: department,
      };
    }

    return student;
  });

  setStudents(updatedStudents);

  setEditId(null);
  setName("");
  setAge("");
  setDepartment("");
};

  return (
    <div>
      <h1>Student List</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button onClick={editId === null ? handleAddStudent : handleUpdate}>
  {editId === null ? "Add Student" : "Update Student"}
</button>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          department={student.department}
          id={student.id}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default App;






// students → বর্তমানে যে student list আছে
// setStudents → student list পরিবর্তন করার function
// useState([...]) → শুরুতে ৪ জন student দেওয়া হয়েছে



// setStudents([
//   ...students,
//   {
//     id: 5,
//     name: "Sadia",
//     age: 21,
//     department: "CSE"
//   }
// ]);

// এখানে:

// ...students → আগের সব student নিয়ে আসছে
// { id: 5, ... } → নতুন Sadia-কে যোগ করছে
// setStudents(...) → নতুন list-টা state-এ set করছে
// State change হওয়ার পর React আবার render করছে
// students.map() নতুন list-এর ৫ জনকেই Card বানিয়ে দেখাচ্ছে



























// import StudentCard from "./StudentCard";

// function App() {
//   return (
//     <div>
//       <h1>Student List</h1>

//       <StudentCard
//         name="Moriam"
//         age={20}
//         department="CSE"
//       />

//       <StudentCard
//         name="Rahim"
//         age={21}
//         department="CSE"
//       />

//       <StudentCard
//         name="Karim"
//         age={22}
//         department="EEE"
//       />

//       <StudentCard
//       name="Nabila"
//       age= {20}
//       department="BBA "
//       /> 

//     </div>
//   );
// }

// export default App;