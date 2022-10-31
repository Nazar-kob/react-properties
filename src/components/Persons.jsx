import React from "react";
import Person from "./Person";
import persons from "../data/persons";

const Persons = () => {
  const arrPersons = persons.map((person) => {
    return <Person key={person.id} {...person} />;
  });
  return <div className="persons">{arrPersons}</div>;
};

export default Persons;
