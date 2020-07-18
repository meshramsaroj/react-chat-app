import React from "react";

const InputMessage = ({ message, setMessage, sendMessage }) => (
  <div className="row">
    <input
      className="p-2 col-md-8 mr-2"
      type="text"
      placeholder="Type a message here..."
      value={message}
      onChange={event => setMessage(event.target.value)}
      onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
    />

    <button
      className="btn btn-primary col"
      onClick={event => sendMessage(event)}
    >
      Send
    </button>
  </div>
);

export default InputMessage;
