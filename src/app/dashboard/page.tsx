import { CourseCard, CoursesProgressGrid } from "@/components";
import { WeeklyToDos } from "@/components/";
import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  return (
    <div className="m-4 flex flex-col ">
      <div className="col-span-3 flex flex-col gap-2">
        <WeeklyToDos />
        <Separator className="my-4 px-0 mx-0"/>
        <CoursesProgressGrid/>
      </div>
    </div>
  );
}
