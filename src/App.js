import "./App.css";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App(props) {

  return (
    <Routes>
      <Route path="/" element={<Main socket={props.socket} />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
