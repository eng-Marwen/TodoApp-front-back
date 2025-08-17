import { useState } from "react";

const TodoForm = (props) => {
  const [item, setItem] = useState(""); //state for input

  const changeItem = (e) => {
    const val = e.target.value;
    setItem(val);
    console.log(val);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    if (!item) return;
    props.onsubmit(item);
    setItem("");
  };


  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={item}
          autoComplete="off"
          onChange={changeItem}
        />
      </div>
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
