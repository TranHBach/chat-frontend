import { useContext, useState } from "react";
import AuthContext from "../../stores/AuthContext";
import AllChatText from "./AllChatText";
import ChatText from "./ChatText";
import "./CurrentChat.css";
import SendText from "./SendText";

function compareId(id1, id2) {
  if (id1 > id2) {
    return id1 + id2;
  } else {
    return id2 + id1;
  }
}

function CurrentChat(props) {
  const ctxValue = useContext(AuthContext);
  let currentIndex;
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
    } catch {}

    const [isTyping, setIsTyping] = useState(false);
    if (isTyping) {
      props.socket.emit("typing", {
        roomNum: compareId(
          ctxValue.allChat[props.currentIndex].from,
          ctxValue.allChat[props.currentIndex].to._id
        ),
        from: ctxValue.allChat[props.currentIndex].from
      });
    }
    return (
      <div className="current-chat">
      <h1>
        {currentChatItem.length !== 0 ? currentChatItem[0].to.username : "Name"}
      </h1>
      <AllChatText>
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
