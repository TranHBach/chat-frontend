import { useContext } from "react";
import AuthContext from "../../stores/AuthContext";
import "./ChatItem.css"

function compareId(id1, id2) {
  if (id1 > id2) {
    return id1 + id2
  } else {
    return id2 + id1
  }
}

function ChatItem(props) {
  const ctxValue = useContext(AuthContext)
  props.socket.emit("join", compareId(ctxValue.allChat[props.index].to._id, ctxValue.allChat[props.index].from))
  function changeCurrentUserId() {
    ctxValue.setcurrentReceiverID(ctxValue.allChat[props.index].to._id)
  }
  return <li className="chat-item" onClick={changeCurrentUserId}>
      <h2>{props.name}</h2>
      <span>You: {props.chat}</span>
  </li>;
}

export default ChatItem
