import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskItems from "../TaskItems";
import "./index.css";

const TasksHome = () => {
  const [taskList, setTaskList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("https://taskmanagerbackend-i81j.onrender.com/tasks");
        if (response.ok === true) {
          const tasksData = await response.json();
          setTaskList(tasksData);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const addNewTask = async () => {
    navigate("/add");
  };

  const deleteTask = async (id) => {
    const apiUrl = `https://taskmanagerbackend-i81j.onrender.com/tasks/${id}`;
    const options = {
      method: "DELETE",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    alert(data.message);
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-main-container">
      <h1 className="main-header">TASK MANAGER</h1>
      <div className="task-header-container">
        <p className="description">Add Your Daily Tasks Here</p>
        <button className="add-task-btn" onClick={addNewTask} type="button">
          Add Task
        </button>
      </div>
      <ul className="task-list-container">
        {taskList.map((task) => (
          <TaskItems task={task} key={task.id} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};
export default TasksHome;
