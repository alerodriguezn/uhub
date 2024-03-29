import React from "react";
import { ToDosLane } from "./ToDosLane";

export const WeeklyToDos = () => {
  return (
    <section className=" ">
      <h2 className="text-2xl font-bold my-2">📝 ToDos Semanal:</h2>
      <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-2 mt-4">
        <ToDosLane title="Lunes" />
        <ToDosLane title="Martes" />
        <ToDosLane title="Míercoles" />
        <ToDosLane title="Jueves" />
        <ToDosLane title="Viernes" />
        <ToDosLane title="Fin de Semana" />
      </div>
    </section>
  );
};
