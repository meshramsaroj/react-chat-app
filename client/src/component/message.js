import React from "react";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimedName = name.trim().toLowerCase();
  if (user === trimedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="container">
      <p> {trimedName}</p>
      <div>
          <p>{text}</p>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Message;
