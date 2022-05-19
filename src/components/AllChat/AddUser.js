import { useContext, useRef } from "react";
import AuthContext from "../../stores/AuthContext";
import "./AddUser.css";

function AddUser() {
  const userNameRef = useRef();
  const ctxValue = useContext(AuthContext);
  function addUserHandler(event) {
    event.preventDefault();
    fetch("http://localhost:8080/addUser", {
      method: "POST",
      body: JSON.stringify({
        friendName: userNameRef.current.value,
      }),
      headers: {
        Authorization: "Bearer " + ctxValue.token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((IDs) => {
        ctxValue.dispatchAllChat({
          type: "addUser",
          userId: IDs.userId,
          username: userNameRef.current.value,
          friendId: IDs.friendId,
          content: [
            {
              text: "Hello, I just added you as a friend",
              send: true,
              receive: false,
            },
          ],
        });
        userNameRef.current.value = "";
      });
  }
  return (
    <form onSubmit={addUserHandler} className="add-user">
      <input ref={userNameRef} id="user-input" className="input-user"></input>
      <label htmlFor="user-input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </label>
    </form>
  );
}

export default AddUser;
