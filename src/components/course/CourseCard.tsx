import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "../ui/button";

export const CourseCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculus and Lineal Algebra</CardTitle>
        <CardDescription>Professor: John Doe</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Tareas Pendientes: 3</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="flex gap-2 w-full items-center justify-center mb-2">
          <Progress value={70} />
          <span>33%</span>
        </div>
        <Button className="w-full text-white font-bold mt-2">Ver Tareas</Button>
      </CardFooter>
    </Card>
  );
};
