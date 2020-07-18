import React from "react";

// import closeIcon from "../../icons/closeIcon";
// import onlineIcon from "../../icons/onlineIcon";

const InfoBar = ({ room }) => {
  return (
    <div className="container list-inline">
      <div className="list-inline-item float-left">
        <span className="material-icons text-primary ">
          fiber_manual_record
        </span>
        <span className="h3 text-uppercase ">{room}</span>
      </div>
      <div className="list-inline-item float-right">
        <a href="/">
          <span className="material-icons p-2 text-dark md-36">close</span>
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
