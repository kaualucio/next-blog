'use client'
import { Calendar, Clock } from '@phosphor-icons/react'
import { format } from 'date-fns';
import React from 'react'

type DatetimeProps = {
  date: string | Date | number;
}

export const Datetime = ({ date }: DatetimeProps) => {
  return (
    <div className="text-sm font-medium flex items-center gap-2 text-text">
      <div className="flex items-center gap-1">
        <Calendar size={20} />
        <p>{format(new Date(date), 'dd/MM/yyyy')}</p>
      </div>
      -
      <div className="flex items-center gap-1">
        <Clock size={20} />
        <p>5 min</p>
      </div>
    </div>
  )
}
