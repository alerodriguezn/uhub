"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export const CourseOptions = () => {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0 ">
          <span className="sr-only">Open menu</span>
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Editar Curso</DropdownMenuItem>
        <DropdownMenuItem>Eliminar Curso</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
