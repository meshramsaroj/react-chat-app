import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./infoBar";
import InputMessage from "./inputMessage";
import MessagesList from "./messagesList";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, () => {});
    return () => {
      socket.emit("disconnected");
      socket.off();
    };
  }, [ENDPOINT, location]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="w-50 m-auto">
      <div className="card text-center">
        <div className="card-header">
          <InfoBar room={room} />
        </div>
        <div className="card-body">
          <h5 className="card-title">Messages</h5>
          <p className="card-text">
            <MessagesList messages={messages} name={name} />
          </p>
        </div>
        <div className="card-footer text-muted">
          <InputMessage
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
