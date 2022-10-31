import React from "react";

const Person = ({ firstName, lastName, email, img }) => {
  return (
    <div className="person">
      <img src={img} alt="#" />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{email}</h4>
    </div>
  );
};

export default Person;
