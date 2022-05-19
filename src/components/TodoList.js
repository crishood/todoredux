import { useSelector} from "react-redux";
import { changeText, changeTitle } from "../store/reducers/Todo.reducer";

const TodoList = () => {
    const text = useSelector((state) => state.todoReducer.text);
    const title = useSelector((state) => state.todoReducer.title);

    return (
        <div className="list">
            <ul>
                <li>Primera tarea</li>
            </ul>
        </div>
    );
}

export default TodoList;