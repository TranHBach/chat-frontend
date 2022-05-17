import AddUser from "./AddUser"
import "./AllChat.css"
import ChatItem from "./ChatItem"
import ChatList from "./ChatList"
function AllChat () {
    return <div className="all-chat">
        <h1 className="chat-header">Chat</h1>
        <AddUser />
        <ChatList>
            <ChatItem />
            <ChatItem />
            <ChatItem />
        </ChatList>
    </div>
}

export default AllChat