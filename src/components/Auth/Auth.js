import Login from "./Login";
import Signup from "./Signup";
import "./Auth.css";
import { Link } from "react-router-dom";
function Auth() {
  return (
    <div className="auth-box">
      <Link to={"/login"}>
        <Login />
      </Link>
      <Link to={"/signup"}>
        <Signup />
      </Link>
    </div>
  );
}

export default Auth;
