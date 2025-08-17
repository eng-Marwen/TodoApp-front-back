const TodoList = ({array,handleDelete }) => {
  return (
    <ul className="list">
      {!array.length && "no todos"}
      {array.map((el) => (
        <li key={el.id}>
          <label>
            <input type="checkbox" />
            {el.title}
          </label>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(el.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
