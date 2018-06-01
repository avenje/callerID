import React from "react";

const NumberDetail = props =>
  <div className="text-center">
  
    <h2>Number Information: </h2>
    <h3>
      Number: {props.phone_number}
    </h3>
    <h3>
      Line Type: {props.line_type}
    </h3>
    <h3>
      Carrier: {props.carrier}
    </h3>
    <h2>Number Belongs to: </h2>
    <h3>
      Name: {props.fullName}
    </h3>
    <h3>
      Age: {props.age_range}
    </h3>
    <h3>
      Gender: {props.gender}
    </h3>
    <h2>Address Information: </h2>
    <h3>
      {props.street_line_1}
    </h3>
    <h3>
       {props.city}, {props.state_code} {props.postal_code}
    </h3>
    
  </div>;

export default NumberDetail;
