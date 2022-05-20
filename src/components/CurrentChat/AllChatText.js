import "./AllChatText.css";
import IsTyping from "./IsTyping";
function AllChatText(props) {
  return (
    <div className="all-text">
      {props.children}
      <IsTyping />
    </div>
  );
}

export default AllChatText;
