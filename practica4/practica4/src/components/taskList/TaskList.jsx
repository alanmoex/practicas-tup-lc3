import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import TaskItem from "../taskItem/TaskItem";

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  const tasksMapped = tasks.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      onToggleTask={onToggleTask}
      onDeleteTask={onDeleteTask}
    ></TaskItem>
  ));

  return (
    <Card className="mb-3 pb-0">
      <Card.Body>
        <h4 className="mb-3">Tasks</h4>
        {tasksMapped}
      </Card.Body>
    </Card>
  );
};

export default TaskList;

TaskList.propTypes = {
  tasks: PropTypes.array,
  onToggleTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
};
