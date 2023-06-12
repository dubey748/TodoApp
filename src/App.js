
import React from "react";
import "./App.css";
import { useEffect, useState } from "react";


const App = () => {
  const [inputValue, setInputValue] = useState("");
const [todos, setTodos] = useState([]);
const [editIndex, setEditIndex] = useState(-1);
const [searchValue, setSearchValue]=useState("")
const [filteredTodos, setFilteredTodos]=useState([])
useEffect(()=>{
  setFilteredTodos(
    todos.filter((todo) =>
      todo.toLowerCase().includes(searchValue.toLowerCase())
    )
  );
}, [todos,searchValue])


const addTodo = () => {
if(inputValue.trim() !==''){
  if(editIndex===-1){
    setTodos([...todos, inputValue])
  }
  else{
const updatedTodos=[...todos]
updatedTodos[editIndex]=inputValue
setTodos(updatedTodos)
setEditIndex(-1)
  }
}
setInputValue("")
};
const remove = (index) => {
const newTodos=todos.filter((_,i)=> i!==index)
setTodos(newTodos)
};
const update = (index) => {
  setEditIndex(index)
  setInputValue(todos[index])
};

  return (
    <div className="container">
      <div className="headline">
        <h1>Todo App</h1>
      </div>
      <div className="input-container">
        <input type='text' value={searchValue} placeholder="Search here" onChange={(e)=>setSearchValue(e.target.value)}></input>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          placeholder="Add here"
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </div>
      <div className="button">
        <button onClick={addTodo}>{editIndex === -1 ? "Add" : "Update"}</button>
      </div>
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            {todo}
           <div>
           <button onClick={()=>remove(index)}>Remove</button>
            <button onClick={()=>update(index)}>Update</button>
           </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
