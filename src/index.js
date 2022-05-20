import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./stores/AuthContext";
import { io } from "socket.io-client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const socket = io("ws://localhost:8080/")

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App socket={socket}/>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
