import React from "react";
import { Button } from "@/components/ui/button";
import { CourseOptions } from './courseOptions';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";


export const CourseItem = () => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Calculus and Algebra</CardTitle>
          <CourseOptions/>
        </div>
        <CardDescription>Professor: John Doe</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Horario: Mon, Wed, Fri - 10:00 AM to 11:30 AM</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="text-white rounded font-semibold w-full">
          Ver Tareas y Notas
        </Button>
      </CardFooter>
    </Card>
  );
};
