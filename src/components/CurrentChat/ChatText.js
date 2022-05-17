import "./ChatText.css"

function ChatText(props) {
    const chatFrom = props.from === "you" ? "chat-you" : "chat-other"
    return <span className={"chat-text " + chatFrom}>{props.text}</span>
}

export default ChatText