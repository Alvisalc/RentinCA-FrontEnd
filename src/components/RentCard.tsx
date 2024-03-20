import React from 'react'
import { RentPostData } from '@/types/data';

const RentCard = ({post}:{post: RentPostData[]}) => {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">{post.heading}</h1>
    <div className="flex justify-end gap-4">
    </div>
  </div>
  )
}

export default RentCard