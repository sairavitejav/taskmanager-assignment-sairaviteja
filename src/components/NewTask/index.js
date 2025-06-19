import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "./index.css";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const readTitle = (event) => {
    setTitle(event.target.value);
  };

  const readDescription = (event) => {
    setDescription(event.target.value);
  };

  const readStatus = (event) => {
    setStatus(event.target.value);
  };

  const readDuedate = (event) => {
    setDueDate(event.target.value);
  };

  const addNewTask = async (event) => {
    event.preventDefault();

    const apiUrl = "https://taskmanagerbackend-i81j.onrender.com/tasks";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuidv4(),
        title: title,
        description: description,
        status: status,
        dueDate: dueDate,
      }),
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    setTitle("");
    setDescription("");
    setStatus("todo");
    setDueDate("");
    alert(data.message);
    navigate("/");
  };

  return (
    <div className="new-task-container">
      <form onSubmit={addNewTask} className="new-task-form-container">
        <h1 className="new-task-header">Add New Task</h1>
        <div className="input-container">
          <label className="input-label" htmlFor="title">
            Title
          </label>
          <input
            className="input-field"
            onChange={readTitle}
            type="text"
            id="title"
            name="title"
            required
            value={title}
            placeholder="Enter Task Title Here"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="description">
            Description
          </label>
          <textarea
            className="input-field description-field"
            onChange={readDescription}
            id="description"
            name="description"
            value={description}
            placeholder="Enter Task Description Here...."
          ></textarea>
        </div>
        <div className="stat-date-container">
          <div>
            <label className="input-label" htmlFor="status">
              Status
            </label>
            <select className="input-field stat-field"
              onChange={readStatus}
              id="status"
              name="status"
              value={status}
              required
            >
              <option value="Todo">Todo</option>
              <option value="In-progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div>
            <label className="input-label" htmlFor="dueDate">
              Due Date
            </label>
            <input className="input-field date-field"
              onChange={readDuedate}
              type="date"
              id="dueDate"
              name="dueDate"
              value={dueDate}
            />
          </div>
        </div>
        <div className="submit-button-container">
          <button className="submit-btn" type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};
export default NewTask;
