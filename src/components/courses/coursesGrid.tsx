import { CourseItem } from "./CourseItem";


export const CoursesGrid = () => {
  return (
    <div className="grid gap-4 grid-cols-3">
      <CourseItem/>
      <CourseItem/>
      <CourseItem/>

    </div>
  );
};
