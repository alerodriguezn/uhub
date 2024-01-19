'use client'

import React from 'react';
import {useDroppable} from '@dnd-kit/core';


export function Droppable(props: any) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style} className='border-2 h-[300px] border-zinc-700 rounded w-1/6'>
      {props.children}
    </div>
  );
}
  