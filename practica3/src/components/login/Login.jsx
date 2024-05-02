import { Alert, Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const alert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  const enteredUsernameHandler = (event) => {
    const Username = event.target.value;
    setEnteredUsername(Username);

    if (Username.toLowerCase().includes("o")) {
      setAlertVariant("warning");
      setAlertMessage("Por favor, ¡Nombres de usuario sin la letra o!");

      alert();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (enteredUsername == "" || enteredUsername.toLowerCase().includes("o")) {
      setAlertVariant("danger");
      setAlertMessage("Usuario inválido para registrarse");

      alert();
    } else {
      setAlertVariant("success");
      setAlertMessage("¡Usuario registrado correctamente!");
      setEnteredUsername("");
      alert();
    }
  };

  return (
    <Card bg="light">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={12} className="text-center">
              <Form.Group className="mb-3" controlId="Username">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ingrese usuario"
                  onChange={enteredUsernameHandler}
                  value={enteredUsername}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col xs={12} md={6}>
              <Button type="submit">Registrarse</Button>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col xs={12} md={12}>
              <p>{enteredUsername}</p>
            </Col>
          </Row>
        </Form>
      </Card.Body>
      <Alert show={showAlert} variant={alertVariant}>
        {alertMessage}
      </Alert>
    </Card>
  );
};

export default Login;
