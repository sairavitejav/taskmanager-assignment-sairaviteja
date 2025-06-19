import { useNavigate } from "react-router-dom";
import "./index.css";

const TaskItems = (props) => {
  const { task, deleteTask } = props;
  const { id, title, description, status, dueDate, createdAt, updatedAt } =
    task;
  const navigate = useNavigate();

  const editTask = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <li className="task-item-container">
      <div>
        <p className="task-item-title">{title}</p>
        <p className="task-item-details">
          <span className="task-item-headers">UUID:</span> {id}
        </p>
        <p className="task-item-details">
          <span className="task-item-headers">Description:</span> {description}
        </p>
        <p className="task-item-details">
          <span className="task-item-headers">Status:</span> {status}
        </p>
        <p className="task-item-details">
          <span className="task-item-headers">Due Date:</span> {dueDate}
        </p>
        <p className="task-item-details">
          <span className="task-item-headers">Created At:</span> {createdAt}
        </p>
        <p className="task-item-details">
          <span className="task-item-headers">Updated At:</span> {updatedAt}
        </p>
      </div>
      <div className="task-item-buttons-container">
        <div>
          <button
            className="task-btns delete-btn"
            type="button"
            onClick={() => deleteTask(id)}
          >
            Delete
          </button>
        </div>
        <div>
          <button
            className="task-btns edit-btn"
            type="button"
            onClick={editTask}
          >
            Edit
          </button>
        </div>
      </div>
    </li>
  );
};
export default TaskItems;
