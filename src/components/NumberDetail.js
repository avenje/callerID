import React from "react";

const NumberDetail = props =>
  <div className="text-center">
  <panel>
    <h2>Number Information </h2>
    <h3>
      <ul>
        <li>Number: {props.phone_number}</li>
        <li>Line Type: {props.line_type}</li>
      </ul>
    </h3>
    <br/>
    <h2>
      Carrier Info
    </h2>
    <h3>{props.carrier}</h3>
    <br/>
    <h2>Number Belongs to </h2>
    <h3>
      <ul>
        <li>Name: {props.fullName}</li>
        <li>Age Range: {props.age_range}</li>
        <li>Gender: {props.gender}</li>
      </ul>
    </h3>
    <br/>
    <h2>Address Info </h2>
      <h3>
        <ul>
          <li>{props.street_line_1}</li>
          <li>{props.city}, {props.state_code} {props.postal_code}</li>
        </ul>
      </h3>
      <br/>
      <h2>Associated People</h2>
      <h3>
        <ul>
          <li>{props.associated_people}</li>
        </ul>
      </h3>
    </panel>
  </div>;

export default NumberDetail;
