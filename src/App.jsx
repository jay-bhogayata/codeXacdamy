import "./App.css";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Link to="/signup">Signup</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/Home">home</Link>

    </>
  );
}

export default App;
