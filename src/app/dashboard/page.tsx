import { CourseCard } from "@/components";
import { WeeklyToDos } from "@/components/";

export default function DashboardPage() {
  return (
    <div className="m-4 flex flex-col ">
      <div className="col-span-3 flex flex-col gap-2">
        <WeeklyToDos />
        <div className="grid grid-cols-3 gap-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
}
