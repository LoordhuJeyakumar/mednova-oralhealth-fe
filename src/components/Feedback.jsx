import React from "react";
import Experts from "./Experts";
import DentalScore from "./DentalScore";

function Feedback() {
  return (
    <div className="row">
      <div className="col-md-7">
        <Experts />
      </div>
      <div className="col-md-5">
        <DentalScore />
      </div>
    </div>
  );
}

export default Feedback;
