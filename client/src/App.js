import React from "react";

import {BrowserRouter as Router, Route} from  'react-router-dom'
import Join from "./component/join";
import Chat from "./component/chat";

// import MessageList from "./component/messageList";
// import SendMessage from "./component/sendMessageForm";

function App() {
  return (
    <div className="app container-fluid">
      <header className=" text-center text-bold p-3 bg-info">
        <h1>React Chat App</h1>
      </header>
      <div className="container m-4 ">
        <Router>
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat}  />
        </Router>
        {/* <div className="row">
          <div className="col-md-4 border-info p-3">RoomList</div>
          <div className="col-md-8">
            <MessageList />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-4">create room</div>
          <div className="col-md-8">
            <SendMessage />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
