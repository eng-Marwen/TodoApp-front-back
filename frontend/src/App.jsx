import { useState } from "react";
import {v4 as uuidv4} from"uuid"
import "./App.css";

const App = () => {
  const [array, updateArray] = useState([]);
  const [item, setItem] = useState(""); //state for input

  const changeItem = (e) => {
    const val = e.target.value;
    setItem(val);
    console.log(val);
  };
  const addEl = (e) => {
    e.preventDefault(); //prevent page refresh
    if (item) {
      console.log(item)
      updateArray([...array, {id:uuidv4(),title:item,completed:false}]);
      console.log(array);
      setItem("");
    }
    return;
  };

  const handleDelete=(id)=>{
    updateArray(array.filter(el=>el.id!==id))
  }

  return (
    <>
      <form className="new-item-form" onSubmit={addEl}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" value={item} autoComplete="off" onChange={changeItem} />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
       {array.map(el=>(
         <li key={el.id}>
          <label >
            <input type="checkbox" />
            {el.title}
          </label>
          <button className="btn btn-danger" onClick={()=>handleDelete(el.id)}>Delete</button>
        </li>
       ))}
      </ul>
    </>
  );
};

export default App;
