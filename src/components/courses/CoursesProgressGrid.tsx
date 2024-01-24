import React from "react";
import { CourseCard } from "../course/CourseCard";

export const CoursesProgressGrid = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold my-2">📓 Cursos Activos: </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
};
