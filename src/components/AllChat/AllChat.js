import { useContext } from "react";
import AuthContext from "../../stores/AuthContext";
import AddUser from "./AddUser";
import "./AllChat.css";
import ChatItem from "./ChatItem";
import ChatList from "./ChatList";
function AllChat(props) {
  const allChatItem = [];
  const ctxValue = useContext(AuthContext);
  ctxValue.allChat.forEach((element, index) => {
    allChatItem.push(
      <ChatItem
        index={index}
        key={index}
        name={element.to.username}
        chat={element.content.at(-1).text}
      />
    );
  });
  return (
    <div className="all-chat">
      <h1 className="chat-header">Chat</h1>
      <AddUser />
      <ChatList>{allChatItem}</ChatList>
    </div>
  );
}

export default AllChat;
