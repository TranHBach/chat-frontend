import AllChatText from "./AllChatText";
import ChatText from "./ChatText";
import "./CurrentChat.css";
import SendText from "./SendText";

function CurrentChat() {
  return (
    <div className="current-chat">
      <h1>Name</h1>
      <AllChatText>
          <ChatText from="you" text="awdawd"/>
          <ChatText from="other" text="awdawd"/>
          <ChatText from="you" text="awdawd"/>
          <ChatText from="other" text="awdawd"/>
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
      <SendText />
    </div>
  );
}

export default CurrentChat;
