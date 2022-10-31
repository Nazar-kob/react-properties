import React from "react";

const Note = ({ petName, petAge, havePet }) => {
  //   const messageText = isPet
  //     ? `I heve a ${petName} is age ${petAge}`
  //     : "I don't have any pets";

  return havePet ? (
    <h1>
      I heve a {petName} is age {petAge}
    </h1>
  ) : (
    <h1>I don't have any pets</h1>
  );
};

export default Note;
