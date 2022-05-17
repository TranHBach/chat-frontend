import "./ChatList.css"

function ChatList(props) {
  return <ul className="chat-list">{props.children}</ul>;
}

export default ChatList;
