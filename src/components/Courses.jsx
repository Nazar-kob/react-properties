import React from "react";
import { Link } from "react-router-dom";

import courses from "../data/courses";

const Courses = () => {
  const coursesLink = courses.map((c) => {
    return (
      <div key={c.id} className="courses-link">
        <Link to={c.slag}>{c.title}</Link>
      </div>
    );
  });

  return <>{coursesLink}</>;
};

export default Courses;
