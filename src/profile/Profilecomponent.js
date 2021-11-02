import React from "react";
import PropTypes from "prop-types";

const Profilecomponent = ({
  alertProfile,
  studentName,
  age,
  Profession,
  myFunction,
}) => {
  return (
    <div>
      <h1>Hello i'm {studentName}</h1>
      <h2>My Age is {age}</h2>
      <h3>I'm an {Profession}</h3>
      {myFunction()}
      {alertProfile()}
    </div>
  );
};
Profilecomponent.defaultProps = {
  Profession: "Engineer",
};
Profilecomponent.propTypes = {
  age: PropTypes.number,
  studentName: PropTypes.string,
  Profession: PropTypes.string,
};

export default Profilecomponent;
