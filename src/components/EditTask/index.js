import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const apiUrl = `https://taskmanagerbackend-i81j.onrender.com/tasks/${id}`;
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(apiUrl, options);
        if (response.ok) {
          const data = await response.json();
          setTask(data);
        } else {
          console.error("Failed to fetch task");
        }
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
    fetchTask();
  }, [id]);
  console.log(task);
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
      setDueDate(task.dueDate);
    }
  }, [task]);

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

  const updateTask = async (event) => {
    event.preventDefault();

    const apiUrl = `https://taskmanagerbackend-i81j.onrender.com/tasks/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        status: status,
        dueDate: dueDate,
      }),
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    alert(data.message);
    navigate("/");
  };

  return (
    <div className="edit-task-container">
      <form onSubmit={updateTask} className="edit-task-form-container">
        <h1 className="edit-task-header">Edit Task</h1>
        <div className="edit-input-container">
          <label className="edit-input-label" htmlFor="title">
            Title
          </label>
          <input
            className="edit-input-field"
            onChange={readTitle}
            type="text"
            id="title"
            name="title"
            required
            value={title}
          />
        </div>
        <div className="edit-input-container">
          <label className="edit-input-label" htmlFor="description">
            Description
          </label>
          <textarea
            className="edit-input-field edit-description-field"
            onChange={readDescription}
            id="description"
            name="description"
            value={description}
          ></textarea>
        </div>
        <div className="edit-stat-date-container">
          <div>
            <label className="edit-input-label" htmlFor="status">
              Status
            </label>
            <select
              className="edit-input-field edit-stat-field"
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
            <label className="edit-input-label" htmlFor="dueDate">
              Due Date
            </label>
            <input
              className="edit-input-field edit-date-field"
              onChange={readDuedate}
              type="date"
              id="dueDate"
              name="dueDate"
              value={dueDate}
            />
          </div>
        </div>
        <div className="update-button-container">
          <button type="submit" className="update-btn">Update</button>
        </div>
      </form>
    </div>
  );
};
export default EditTask;
