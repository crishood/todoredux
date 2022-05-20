import { useSelector, useDispatch } from "react-redux";
import {
  changeText,
  changeTitle,
  changePriority,
  CHANGE_STATE,
} from "../store/reducers/Todo.reducer";

const ToDoForm = () => {
  const dispatch = useDispatch();
  const { text, title, priority, list } = useSelector(
    (state) => state.todoReducer
  );

  return (
    <div className="form">
      <h1>ToDo</h1>
      <form action="/">
        <input
          placeholder="Añade una tarea..."
          type="text"
          onChange={(event) => {
            dispatch(changeTitle(event.target.value));
          }}
          value={title}
        />
        <textarea
          placeholder="¿Qué vas a hacer?"
          onChange={(event) => {
            dispatch(changeText(event.target.value));
          }}
          value={text}
        />
        <div className="radio">
          <input
            type="checkbox"
            onClick={(event) => {
              dispatch(
                changePriority(event.target.checked === true ? true : false)
              );
              console.log(event.target.checked);
            }}
            checked={priority}
          />
          <span>¿Es prioritaria?</span>
        </div>
      </form>
      <button
        onClick={() => {
          console.log(list);
          dispatch({ type: CHANGE_STATE });
        }}
      >
        Añadir tarea
      </button>
    </div>
  );
};

export default ToDoForm;
