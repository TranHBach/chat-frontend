import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../stores/AuthContext";

function LoginBox() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const ctxValue = useContext(AuthContext);

  async function logInHandler(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const res = await response.json();
    ctxValue.setToken(res.token);
    navigate("/");
  }
  return (
    <form
      onSubmit={logInHandler}
      className="signup-section"
      style={{ height: "25rem" }}
    >
      <h1>Log In Chat</h1>
      <div className="signup-input">
        <label htmlFor="signup-username">Username</label>
        <input
          ref={usernameRef}
          type={"text"}
          id="signup-username"
          placeholder="Username"
        ></input>
      </div>
      <div className="signup-input">
        <label htmlFor="signup-password">Password</label>
        <input
          ref={passwordRef}
          type={"password"}
          id="signup-password"
          placeholder="Password"
        ></input>
      </div>
      <div className="btn-signup-box">
        <button>Login</button>
      </div>
    </form>
  );
}

export default LoginBox;
