import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import NewTask from "./components/newTask/NewTask";
import TaskList from "./components/taskList/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    { name: "Pasear perro", id: 1, completed: false },
    { name: "Pasear perro", id: 2, completed: false },
  ]);

  const addTaskHandler = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskHandler = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <TaskList
            tasks={tasks}
            onToggleTask={toggleTaskHandler}
            onDeleteTask={deleteTaskHandler}
          ></TaskList>
          <NewTask onAddTask={addTaskHandler}></NewTask>
        </Col>
      </Row>
    </>
  );
};

export default App;
