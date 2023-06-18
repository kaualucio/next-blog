import Image from 'next/image'
import React from 'react'

import placeholderImage from '../../public/images/placeholder.jpg'

type CommentInfo = {
  id: string;
  name: string;
  comment: string;
}

type CommentProps = {
  comment: CommentInfo
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="min-h-[200px] px-3 py-5 bg-white rounded-md flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="relative overflow-hidden w-14 h-14 rounded-full ">
          <Image 
            src={placeholderImage}
            alt=""
            fill
            className="rounded-full object-cover"
          />
        </div>
        <p className="text-gray-600 font-bold">{comment.name}</p>
      </div>
      <p className="text-gray-600 text-md">
        {comment.comment}
      </p>
    </div>
  )
}
