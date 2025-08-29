import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import "./App.css";

const App = () => {
  const [array, updateArray] = useState([]);

  //fetch todos from backend
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user")
      .then((res) => {
        updateArray(res.data.data.todos);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    const td=array.filter((el) => el.id === id)
    console.log(td);
    const res = await axios.delete(`http://localhost:4000/api/user/${td[0].title}`);
    updateArray(array.filter((el) => el.id !== id));
  };
  const addwithProps = async (title) => {
    if (!title) return;
    try {
      const newItem = { id: uuidv4(), title, completed: false };
      const res = await axios.post(
        "http://localhost:4000/api/user/create",
        newItem
      );

      updateArray([...array, { id: uuidv4(), title, completed: false }]);
    } catch (er) {
      console.log(er.message);
    }
  };

  return (
    <>
      <TodoForm onsubmit={addwithProps} />
      <h1 className="header">Todo List</h1>
      <TodoList array={array} handleDelete={handleDelete} />
    </>
  );
};

export default App;
