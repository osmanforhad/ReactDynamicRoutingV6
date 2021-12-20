import React from "react";
import { Link } from "react-router-dom";

function Nomatch() {
  return (
    <div>
      <h4 className="text-center">
      404! Not Found
        <br />
        ||
        <br />
        There's nothing here
      </h4>
      <br/>
        <br/>
      <p className="text-center">Go Back to <Link to="/">Home</Link></p>
      
    </div>
  );
}

export default Nomatch;
