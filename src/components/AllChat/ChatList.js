import "./ChatList.css"
import AuthContext from "../../stores/AuthContext";
import { useContext } from "react";
import ChatItem from "./ChatItem";
function ChatList(props) {
  const allChatItem = [];
  const ctxValue = useContext(AuthContext);
  ctxValue.allChat.forEach((element, index) => {
    allChatItem.push(
      <ChatItem
        socket={props.socket}
        index={index}
        key={index}
        name={element.to.username}
        chat={element.content.at(-1).text}
      />
    );
  });
  return <ul className="chat-list">{allChatItem}</ul>;
}

export default ChatList;
