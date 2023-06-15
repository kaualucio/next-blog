import React from 'react'

interface TitleProps {
  label: string;
}

export const Title = ({ label }: TitleProps) => {
  return (
    <h2 className="text-3xl text-dark-gray font-bold mb-5">{label}</h2>
  )
}
