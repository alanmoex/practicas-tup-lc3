import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ task, onToggleTask, onDeleteTask }) => {
  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  const handleCompletedTask = () => {
    onToggleTask(task.id);
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCompletedTask}
          /* funcion anonima llama a la funcion que cambia entre tarea completa o no completa*/
        />
        <label>
          <p
            style={{
              /* tachamos el texto si la tarea esta completada*/
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.name}
          </p>
        </label>
      </div>
      <FontAwesomeIcon
        icon={faTimes}
        onClick={handleDelete}
        className="text-danger"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object,
  onToggleTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
};

export default TaskItem;
