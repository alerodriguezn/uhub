"use client";
import * as React from "react";
import { FilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarDateAssignment } from "./CalendarDateAssignment";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AddAssignmentDialog() {
  const [date, setDate] = React.useState<Date>();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="rounded text-white flex gap-2">
          <FilePlus size={18} />
          <span>Nueva Tarea</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear Tarea/Actividad</DialogTitle>
          <DialogDescription>
            Agrega una nueva tarea o actividad. Presiona guardar para agregarla
            a tu lista de tareas.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Título
            </Label>
            <Input id="title" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Fecha
            </Label>
            <div className="col-span-3">
              <CalendarDateAssignment date={date} setDate={setDate} />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Curso
            </Label>
            <div className="col-span-3">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un curso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Math</SelectItem>
                  <SelectItem value="dark">Calculus</SelectItem>
                  <SelectItem value="system">Algorithms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Tipo
            </Label>
            <div className="col-span-3">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un curso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Quiz</SelectItem>
                  <SelectItem value="dark">Examen</SelectItem>
                  <SelectItem value="system">Tarea</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
