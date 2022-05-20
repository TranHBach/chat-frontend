import AddUser from "./AddUser";
import "./AllChat.css";
import ChatList from "./ChatList";
function AllChat(props) {
  return (
    <div className="all-chat">
      <h1 className="chat-header">Chat</h1>
      <AddUser />
      <ChatList socket={props.socket} />
    </div>
  );
}

export default AllChat;
