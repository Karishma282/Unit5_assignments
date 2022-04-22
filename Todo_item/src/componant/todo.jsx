import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

function Todo (){
    const [todolist,setTodoList] = useState([]);
   const getData = (todo) =>{
       setTodoList([...todolist,todo])
   }
    return (
        <div>
            <TodoInput getData={getData}/>
            {todolist.map((e)=>(
               <TodoItem todo={e}></TodoItem>
                
            ))}
        </div>
    )
}

export { Todo }