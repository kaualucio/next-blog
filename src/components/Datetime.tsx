'use client'
import { Calendar, Clock } from '@phosphor-icons/react'
import React from 'react'

export const Datetime = () => {
  return (
    <div className="text-sm font-medium flex items-center gap-2 text-text">
      <div className="flex items-center gap-1">
        <Calendar size={20} />
        <p>18/05</p>
      </div>
      -
      <div className="flex items-center gap-1">
        <Clock size={20} />
        <p>5 min</p>
      </div>
    </div>
  )
}
