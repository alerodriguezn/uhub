"use client";

import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";
 

 
export function AddTodo() {

  function onClick() {
   
  }
 
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="default" className="rounded-t-none h-8">
            <Plus size={18} color="white" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Agrega un nuevo ToDo</DrawerTitle>
            <DrawerDescription>Describe la tarea/actividad que tienes realizar</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 flex flex-col gap-2">
            <Label className="font-bold">Nombre del ToDo:</Label>
            <Input className="" />
    
          </div>
          <DrawerFooter>
            <Button className="text-white">Agregar</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}