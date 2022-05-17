import logo from "./logo.svg";
import "./App.css";
import LiterallyAStraightLine from "./components/LiterallyAStraigtLine"
import AllChat from "./components/AllChat/AllChat";
import CurrentChat from "./components/CurrentChat/CurrentChat";

function App() {
  return <div className="container">
    <div className="outline">
      <section className="chat-section">
        <AllChat />
        <LiterallyAStraightLine />
        <CurrentChat />
      </section>
    </div>
  </div>;
}

export default App;
