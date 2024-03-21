import React from 'react'
import { RoommatePostData } from '@/types/data';

type RoommatePostDetailProps = {
  post: RoommatePostData;
};

const RoommatePostDetail: React.FC<RoommatePostDetailProps> = ({post}) => {
  return (
    <div>
        <h1>RoommatePostDetail</h1>
        <p>{post.heading}</p>
        <p>{post.sex}</p>
        <p>{post.preferred_location}</p>
        <p>{post.preferred_date}</p>
        <p>{post.budget}</p>
        <p>{post.about_me}</p>
        <p>{post.about_roommate}</p>
        <p>{post.contact}</p>
    </div>
  )
}

export default RoommatePostDetail