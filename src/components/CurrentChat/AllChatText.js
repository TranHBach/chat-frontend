import { useState } from "react";
import "./AllChatText.css";
import IsTyping from "./IsTyping";

function AllChatText(props) {
  const [isTyping, setIsTyping] = useState()
  props.socket.on("isTyping", (data) => {
    console.log(data.from, props.senderId)
    if (data.from === props.senderId) {
      setIsTyping(<IsTyping />)
    } else {
      setIsTyping("")
    }
  });
  return (
    <div className="all-text">
      {props.children}
      {isTyping}
    </div>
  );
}

export default AllChatText;
