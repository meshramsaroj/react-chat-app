import React, {  useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="container">
      <div className="m-auto w-50">
        <h1 className="text-center border-bottom border-info" >Join</h1>
        <div className=" p-4">
          <div className="m-2 ">
            <input
              className=" p-2 w-100"
              type="text"
              placeholder="Name"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className="m-2 ">
            <input
              className="p-2 w-100"
              type="text"
              placeholder="Room"
              onChange={event => setRoom(event.target.value)}
            />
          </div>
          <div className="m-2">
          <Link
            onClick={(event) => (!name || !room ? event.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="btn btn-primary w-100 p-2 " type="submit">
              Sign In
            </button>
          </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Join;
