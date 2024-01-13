import React, { useContext, useEffect, useState } from "react";
import Row from "./Row";
import Loader from "./Loader";
import { DataContext } from "../contexts/DataContext";
import Empty from "./Empty";

const RowGroup = () => {
  const { courses, setCourses } = useContext(DataContext);

  const [isReady, setIsReady] = useState(false);

  const LoaderRowCount = Array.from({ length: 6 }, (_, index) => index);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("http://localhost:5173/api/courses");
      const json = await res.json();
      setCourses(json);
      setIsReady(true);
    };
    fetchCourses();
  }, []);

  return (
    <>
      {!isReady && LoaderRowCount.map((el, index) => <Loader key={index} />)}

      {isReady && (courses.length ? courses.map((course) => (
        <Row key={course.id} course={course} />
      )): <Empty />)}
    </>
  );
};

export default RowGroup;
