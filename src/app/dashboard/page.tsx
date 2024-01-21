import { CourseCard } from "@/components";
import { DashboardAside } from '../../components/ui/dashboard-aside';
import { WeeklyToDos } from "@/components/";

export default function DashboardPage() {
  return (
    <div className="m-4 grid grid-cols-4 ">
      <div className="col-span-3 flex flex-col gap-2">
        <h2></h2>
        <WeeklyToDos/>
        <div className="grid grid-cols-3 gap-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        </div>
      </div>

      <DashboardAside/>
    </div>
  );
}
