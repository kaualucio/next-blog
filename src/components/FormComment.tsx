'use client'
import { createComment } from '@/graphql/queries'
import { useMutation } from '@apollo/client'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'

import placeholderImage from '../../public/images/placeholder.jpg'

type FormCommentProps = {
  postId: string;
}

export const FormComment = ({ postId }: FormCommentProps) => {
  const [commentData, setCommentData] = useState({
    name: '',
    comment: ''
  })
  const [message, setMessage] = useState('')
  const [ addComment , { data, loading } ] = useMutation(createComment, {
    variables: {
      name: commentData.name,
      comment: commentData.comment,
      postId: postId
    },
    errorPolicy: 'all',
  })

  const createNewComment = async (e: FormEvent) => {
    e.preventDefault()
    const { data } = await addComment()
    console.log(data)
    if(data.createComment.id) {
      setCommentData({
        name: '',
        comment: ''
      })
      return setMessage('Sua mensagem foi enviada para análise.')
    }
  }

  return (
    <div className="flex gap-5">
      <div className="relative overflow-hidden w-14 h-14 rounded-full ">
        <Image 
          src={placeholderImage}
          alt=""
          fill
          className="rounded-full object-cover"
        />
      </div>
      <form onSubmit={(e) => createNewComment(e)} className="w-[calc(100%-64px)] flex flex-col gap-4">
          <input 
            type="text" 
            name="name"
            placeholder="Seu nome..."  
            value={commentData.name}
            onChange={(e) => setCommentData(prevState => ({...prevState, name: e.target.value}))}
            className="w-full rounded-md border border-gray-300 p-2"
          />
          <textarea 
            name="message"
            placeholder="Sua mensagem..."
            value={commentData.comment}
            onChange={(e) => setCommentData(prevState => ({...prevState, comment: e.target.value}))}
            className="w-full h-32 rounded-md border border-gray-300 p-2"
          ></textarea>
          <div className="w-full flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className="self-end w-32 p-3 rounded-md bg-primary text-sm text-white font-bold disabled:bg-opacity-80"
            >Enviar</button>
            {
              message.length > 0 ? <p className="text-green-500 font-medium">{message}</p> : null
            }
          </div>
      </form>
    </div>
  )
}
