import "./AllChatText.css"

function AllChatText(props) {
    // May use global state here
    return <div className="all-text">{props.children}</div>
}

export default AllChatText