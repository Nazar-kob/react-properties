import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import courses from "../data/courses";

const SingeCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.slag === params.slugLink);

  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slag}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingeCourse;
