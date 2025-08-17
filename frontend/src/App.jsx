import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "../components/TodoForm";
import "./App.css";
import TodoList from "../components/TodoList";

const App = () => {
  const [array, updateArray] = useState([]);

  const handleDelete = (id) => {
    updateArray(array.filter((el) => el.id !== id));
  };
  const addwithProps = (title) => {
    if (!title) return;
    updateArray([...array, { id: uuidv4(), title, completed: false }]);
  };

  return (
    <>
      <TodoForm onsubmit={addwithProps} />
      <h1 className="header">Todo List</h1>
      <TodoList array={array} handleDelete={handleDelete}/>
    </>
  );
};

export default App;
