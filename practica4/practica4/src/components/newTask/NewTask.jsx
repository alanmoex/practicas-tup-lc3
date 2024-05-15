import PropTypes from "prop-types";
import { Button, Card, Form } from "react-bootstrap";
import { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");

  const newTaskHandler = () => {
    event.preventDefault();
    const newTask = { name: taskName, id: Math.random(), completed: false };
    onAddTask(newTask);
  };

  const changeTaskNameHandler = (element) => {
    setTaskName(element.target.value);
  };

  return (
    <Card className="mb-3 pb-0">
      <Card.Body>
        <Form onSubmit={newTaskHandler}>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label>
              <h4>New Task</h4>
            </Form.Label>
            <Form.Control
              className="custom-input"
              onChange={changeTaskNameHandler}
              value={taskName}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button type="submit">Add</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

NewTask.propTypes = {
  onAddTask: PropTypes.func,
};

export default NewTask;
