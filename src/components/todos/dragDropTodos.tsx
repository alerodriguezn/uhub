"use client";

import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "@/components";
import { Droppable } from "@/components";

export function DragDropTodos() {
  const [parent, setParent] = useState(null);

  const draggable = (
    <Draggable id="pending" className="bg-red-500">
      Pending 1
    </Draggable>
  );

  return (
    <section className="w-full">
      <DndContext onDragEnd={handleDragEnd}>
        {!parent ? draggable : null}
        <Droppable id="droppable">
          {parent === "droppable" ? draggable : "Drop here"}
        </Droppable>
      </DndContext>
    </section>
  );

  function handleDragEnd({ over }: any) {
    setParent(over ? over.id : null);
  }
}
