import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todos/todos-actions";
import { allTodos } from "../store/todos/todos-selectors";


export const TodoList = () => {
  const todos = useSelector(allTodos);
  const dispatch = useDispatch();
  return (
    <ul>
      {
        todos.map(todo =>
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
            {todo.title}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
            >delete</button>
          </li>
        )
      }
    </ul>
  )
}