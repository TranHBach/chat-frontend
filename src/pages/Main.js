import LiterallyAStraightLine from "../components/Helpers/LiterallyAStraigtLine";
import AllChat from "../components/AllChat/AllChat";
import CurrentChat from "../components/CurrentChat/CurrentChat";
import Auth from "../components/Auth/Auth";
import { useContext, useEffect } from "react";
import AuthContext from "../stores/AuthContext";

function Main(props) {
  const ctxValue = useContext(AuthContext);
  const { dispatchAllChat } = ctxValue;
  props.socket.on("sendToOther", (data) => {
    console.log("oiewg")
    fetch("http://localhost:8080/chat/get", {
      method: "POST",
      headers: { Authorization: "Bearer " + ctxValue.token },
    })
      .then((response) => response.json())
      .then((res) => {
        dispatchAllChat({type: "initial", all: res});
      });
  });

  useEffect(() => {
    fetch("http://localhost:8080/chat/get", {
      method: "POST",
      headers: { Authorization: "Bearer " + ctxValue.token },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res)
        dispatchAllChat({type: "initial", all: res});
      });
  }, [ctxValue.token, dispatchAllChat]);
  return (
    <>
      <Auth />
      <div className="container">
        <div className="outline">
          <section className="chat-section">
            <AllChat socket={props.socket}/>
            <LiterallyAStraightLine />
            <CurrentChat socket={props.socket} />
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
