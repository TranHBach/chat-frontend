import { useContext, useRef } from "react";
import AuthContext from "../../stores/AuthContext";
import "./SendText.css";

function compareId(id1, id2) {
  if (id1 > id2) {
    return id1 + id2;
  } else {
    return id2 + id1;
  }
}

function SendText(props) {
  const ctxValue = useContext(AuthContext);
  const chatTextRef = useRef();

  function sendChatHandler(event) {
    event.preventDefault();
    fetch("http://localhost:8080/chat/send", {
      method: "POST",
      body: JSON.stringify({
        content: chatTextRef.current.value,
        toID: ctxValue.currentReceiverID,
      }),
      headers: {
        Authorization: "Bearer " + ctxValue.token,
        "Content-Type": "application/json",
      },
    }).then(() => {
      const dispatchValue = {
        type: "addChat",
        index: props.currentIndex,
        content: {
          text: chatTextRef.current.value,
          send: true,
          receive: false,
        },
      };
      chatTextRef.current.value = "";
      props.socket.emit("send", {
        roomNum: compareId(ctxValue.allChat[props.currentIndex].from, ctxValue.allChat[props.currentIndex].to._id),
      });
      props.onClickHandler.bind(null, false)
      ctxValue.dispatchAllChat(dispatchValue);
    });
  }

  return (
    <form onSubmit={sendChatHandler} className="send-text">
      <input ref={chatTextRef} id="input-text" />
      <label htmlFor="input-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="send-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </label>
    </form>
  );
}

export default SendText;
