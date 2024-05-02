import { Alert, Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
  const [enteredUser, setEnteredUser] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const alert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  const enteredUserHandler = (event) => {
    const user = event.target.value;
    setEnteredUser(user);

    if (user.toLowerCase().includes("o")) {
      setAlertVariant("warning");
      setAlertMessage("Por favor, ¡Nombres de usuario sin la letra o!");

      alert();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (enteredUser == "" || enteredUser.toLowerCase().includes("o")) {
      setAlertVariant("danger");
      setAlertMessage("Usuario inválido para registrarse");

      alert();
    } else {
      setAlertVariant("success");
      setAlertMessage("¡Usuario registrado correctamente!");

      alert();
    }
  };

  return (
    <Card bg="light">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={12} className="text-center">
              <Form.Group className="mb-3" controlId="user">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ingrese usuario"
                  onChange={enteredUserHandler}
                  value={enteredUser}
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
              <p>{enteredUser}</p>
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
