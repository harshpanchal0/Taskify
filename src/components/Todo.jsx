import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleMarkAsDone = (id) => {
    dispatch(markAsDone(id));
  };
  return (
    <div>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.task}
              </span>{" "}
              &nbsp;
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              &nbsp;
              <button onClick={() => handleMarkAsDone(todo.id)}>
                Mark as Done
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
