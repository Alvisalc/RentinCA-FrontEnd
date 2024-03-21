import React from 'react'
import { RoommatePostData } from '@/types/data';

type RoommatePostDetailProps = {
  post: RoommatePostData;
};

const ClientRoommatePost: React.FC<RoommatePostDetailProps> = ({post}) => {
  return (
    <div>
        <h1>ClientRoommatePost</h1>
        <p>{post.heading}</p>
    </div>
  )
}

export default ClientRoommatePost