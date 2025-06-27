import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./AddForm.css";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  let handleInputChange = (e) => {
    setTask(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleInputChange} />
        <button>Add Task</button>
      </form>
    </div>
  );
}
