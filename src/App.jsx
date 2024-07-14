import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./store";
export default function App() {
  return (
    <>
      <h1>React + Redux Todo</h1>
      <NewTodo />
      <TodoList />
    </>
  )
}

const NewTodo = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  }
  return <form onSubmit={handleSubmit}>
    <input type="text" name="title" placeholder="New todo..." />
    <input type="submit" value="Add Todo" />
  </form>
}

const TodoList = () => {
  const todos = useSelector(state => state);
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
