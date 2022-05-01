import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { addTodo,deleteTodo } from "../actions";




export const Todo=()=>{
    const [inputData,setInputData]=useState("");
    const list=useSelector((state)=> state.TodoReducers.list);
    const dispatch=useDispatch();

    return(
        <>
        <div className="main-div">
            <div className="child-div">
                <h1>Redux Todo</h1>
                <figure>
                    <figcaption>Todo List</figcaption>
                </figure>
                <div className="addItems">
                    <input
                    type="text"
                    placeholder="Add Items"
                    value={inputData}
                    onChange={(e)=>setInputData(e.target.value)}
                    />
                    <button
                    className="add-btn"
                    onClick={()=>dispatch(addTodo(inputData),setInputData(""))}
                    >
                        {" "}
                        ADD TODO
                    </button>
                </div>
                <div className="showItem">
            {list.map((el)=>{
              return(
                <div style={{width:"150px", margin:"auto"}}>
                <div style={{display:"flex"}} className="items" key={el.id}>
                  <h2 style={{marginRight:"20px"}}>{el.data}</h2>
                  <button style={{height:"30px", width:"110px",marginTop:"20px"}}
                   className="add-btn"
                    title="Delete item"
                    onClick={() =>
                      dispatch(deleteTodo(el.id))
                    } 
                  >delete</button>
                </div>
                </div>
              )
            })}
          </div>

            </div>
        </div>
        </>
    );
    
}




// const Todo = () ⇒ {
//     const [inputData, setInputData] = useState(' ');
//     const [items, setItems] = useState(getLocalItmes());
//     const addItem = () = {
//     if (!inputData) {
//     } else {
//     setItems([... items, inputData]);
//     setInputData('')
//     }
//     }
//     //delete the items
//     const deleteItem = (id) {
//     ➡️>>
//     console.log(id);
//     const updateditems = items.filter((elem, ind) {
//     return ind=id;
//     });
//     setItems (updateditems);
//     }
    





// const deleteItem = (index) ⇒
// const updated items = items.filter((elem) ⇒ {
// return index = elem.id;
// });
// setItems (updateditems);
// }
