import { CourseCard } from "@/components";
import { DashboardAside } from '../../components/ui/dashboard-aside';

export default function DashboardPage() {
  return (
    <div className="m-4 grid grid-cols-3 ">
      <div className="col-span-2 flex gap-2">
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
