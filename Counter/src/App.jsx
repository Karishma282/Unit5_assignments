import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [counter,setCounter]=useState(0);

const handlechange=(value)=>{
  setCounter(counter+value);
}
if(counter%2===0){
  document.body.style.color="green";
}
else{
  document.body.style.color="red"
}
  return (
    <div className="App">
      <h2>Counter:{counter}</h2>
      <button className="btn1" onClick={()=>handlechange(1)}><b>Increment</b></button>
      <button className="btn2" onClick={()=>{
        if(counter<=0)
        return;
        handlechange(-1)}}><b>Decrement</b></button>

      <button  className="btn3" onClick={()=>{
        handlechange(counter*1)
      }}><b>Double</b></button>

    </div>
  );
}

export default App;
