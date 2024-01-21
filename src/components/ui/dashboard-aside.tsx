import React from 'react'
import { BigCalendar } from './big-calendar'

export const DashboardAside = () => {
  return (
    <aside className='mx-4 flex flex-col items-center '>
        <BigCalendar/>
        <section className='mt-4'>
          <h3 className='text-xl font-bold text-left'>Tareas para HOY:</h3>
          
        </section>

    </aside>
  )
}
