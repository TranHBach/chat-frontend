import React, { useReducer, useState } from "react";

const AuthContext = React.createContext();

function chatReducer(state, action) {
  let newState;
  switch (action.type) {
    case "initial":
      return action.all;
    case "addChat":
      console.log(action)
      newState = JSON.parse(JSON.stringify(state));
      newState[action.index].content.push(action.content);
      return newState;
    case "addUser":
      return [...state, {
        from: action.userId,
        to: { _id: action.friendId, username: action.username },
        content: action.content,
      }];
    default:
      return state;
  }
}

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [currentReceiverID, setcurrentReceiverID] = useState(
    "6284d1f3f51b63d64cb1634b"
  );
  const [allChat, dispatchAllChat] = useReducer(chatReducer, []);
  const ctxValue = {
    token,
    setToken,
    currentReceiverID,
    setcurrentReceiverID,
    allChat,
    dispatchAllChat,
  };
  return (
    <AuthContext.Provider value={ctxValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
