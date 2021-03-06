import { useContext, useState } from "react";
import AuthContext from "../../stores/AuthContext";
import AllChatText from "./AllChatText";
import ChatText from "./ChatText";
import "./CurrentChat.css";
import SendText from "./SendText";

let currentIndex;
let senderId;
function compareId(id1, id2) {
  if (id1 > id2) {
    return id1 + id2;
  } else {
    return id2 + id1;
  }
}

function CurrentChat(props) {
  const [isTyping, setIsTyping] = useState(false);
  const ctxValue = useContext(AuthContext);
  const currentChatItem = ctxValue.allChat.filter((element, index) => {
    if (element.to._id === ctxValue.currentReceiverID) {
      currentIndex = index;
      return true;
    }
    return false;
  });
  const allChatText = [];
  console.log(currentChatItem);
  try {
    currentChatItem[0].content.forEach((element, index) => {
      allChatText.push(
        <ChatText
          key={index}
          from={element.send ? "you" : "other"}
          text={element.text}
        />
      );
    });
    senderId = currentChatItem[0].to._id;
    console.log(senderId)
    if (isTyping) {
      props.socket.emit("typing", {
        roomNum: compareId(currentChatItem[0].from, currentChatItem[0].to._id),
        from: currentChatItem[0].from,
      });
    }
  } catch {}

  return (
    <div className="current-chat">
      <h1>
        {currentChatItem.length !== 0 ? currentChatItem[0].to.username : "Name"}
      </h1>
      <AllChatText socket={props.socket} senderId={senderId}>
        {allChatText}
        {/* <ChatText from="you" text="awdawd"/>
          <ChatText from="other" text="awdawd"/>
          <ChatText from="you" text="awdawd"/>
          <ChatText from="other" text="awdawd"/>
          <ChatText from="you" text="awdawd"/> */}
        {/* <ChatText from="other" text="awdawd"/>
          <ChatText from="other" text="awdawd"/>
          <ChatText from="other" text="awdawd"/>
          <ChatText from="other" text="awdawd"/> */}
      </AllChatText>
      <SendText
        onClickHandler={setIsTyping}
        socket={props.socket}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default CurrentChat;
