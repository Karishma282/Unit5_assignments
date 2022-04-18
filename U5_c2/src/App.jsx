import { useEffect, useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import "./App.css"

function App() {
  const[Stud,setstud]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/students")
    .then((d)=>d.json())
    .then((data)=>{
      setstud(data)
    })
  },[])
 
  return (
    <div className="App">
      <button className="togglebtn">Add a New Student</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {/* <AddStudent/> */}
      <ShowStudents/>
     { Stud.map((Stud)=>(
        <div>{[Stud.first_name,Stud.last_name,Stud.email,Stud.gender,Stud.age,Stud.tenth_score,Stud.twelth_score,Stud.preferred_branch]}</div>
        
      ))}
    </div>
  );
}

export default App;