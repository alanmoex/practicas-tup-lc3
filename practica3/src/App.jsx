import Login from "./components/login/Login";

function App() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={
        { minHeight: "100vh" } // hace que el componente ocupe todo el alto
      }
    >
      <Login></Login>
    </div>
  );
}

export default App;
