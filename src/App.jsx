import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";

export default function App() {
  return (
    <>
      <h1>React + Redux Todo</h1>
      <NewTodo />
      <TodoList />
    </>
  )
}