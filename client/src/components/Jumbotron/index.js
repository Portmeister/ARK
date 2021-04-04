import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 250, clear: "both", paddingTop: 90, textAlign: "center", opacity: 0.4 }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
