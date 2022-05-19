import { useSelector, useDispatch } from "react-redux";
import { changeText, changeTitle, changePriority } from "../store/reducers/Todo.reducer";

const ToDoForm = () => {
    const dispatch = useDispatch();
    const text = useSelector((state) => state.todoReducer.text);
    const title = useSelector((state) => state.todoReducer.title);
    const priority = useSelector((state) => state.todoReducer.priority);

    return (
        <div className="form">
            <h1>ToDo</h1>
            <form>
                <input
                    placeholder="Añade una tarea..."
                    type="text"
                    value={title}
                />
                <textarea
                    placeholder="¿Qué vas a hacer?"
                    value={text}
                />
                <div className="radio">
                    <input type="radio" />
                    <span>¿Es prioritaria?</span>
                </div>
                <button
                    type="submit"
                    onClick={(event)=> dispatch(changeText(event.target.value),changeTitle(event.target.value))}
                >
                    Añadir tarea
                </button>
            </form>
        </div>
    );
}

export default ToDoForm;