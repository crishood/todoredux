import { useSelector } from "react-redux";

const TodoList = () => {
  const { list } = useSelector((state) => state.todoReducer);
  return (
    <div className="list">
      <ul>
        <li>Primera tarea</li>
      </ul>
      {list.map((item) => {
        console.log(item);
        return (
          <div>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
            <small>
              {item.priority === true ? "Es prioritario" : "No es prioritario"}
            </small>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
