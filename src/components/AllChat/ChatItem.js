import { useContext } from "react";
import AuthContext from "../../stores/AuthContext";
import "./ChatItem.css"

function ChatItem(props) {
  const ctxValue = useContext(AuthContext)
  function changeCurrentUserId() {
    ctxValue.setcurrentReceiverID(ctxValue.allChat[props.index].to._id)
  }
  return <li className="chat-item" onClick={changeCurrentUserId}>
      <h2>{props.name}</h2>
      <span>You: {props.chat}</span>
  </li>;
}

export default ChatItem
