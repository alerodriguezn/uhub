import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { AddTodo } from "./AddTodo";


interface Props {
  title: string;
}

export const ToDosLane = ({ title }: Props) => {
  return (
    <div className=" h-[300px]  border-2 border-gray-800 rounded-md flex flex-col justify-between">
      <div>
        <h3 className="text-center font-semibold mb-1">{title}</h3>
        <Separator />
        <div className="flex flex-col w-full">
          <div className="flex gap-2 p-2">
            <Checkbox />
            <span className="text-xs">Leer Pag. 87 libro </span>
          </div>
          <div className="flex gap-2 p-2">
            <Checkbox />
            <span className="text-xs">Quiz Mate</span>
          </div>
          <div className="flex gap-2 p-2">
            <Checkbox />
            <span className="text-xs">Examen Quimica</span>
          </div>
          <div className="flex gap-2 p-2">
            <Checkbox />
            <span className="text-xs">Hacer Resumen</span>
          </div>
        </div>
      </div>
      <AddTodo/>
    </div>
  );
};
