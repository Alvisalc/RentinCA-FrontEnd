// Inside RentPostDetail.tsx or wherever RentPostDetail is defined

import React from 'react';
import { RentPostData } from '@/types/data';

// Define a type for the component's props
type RentPostDetailProps = {
  post: RentPostData;
};

const RentPostDetail: React.FC<RentPostDetailProps> = ({ post }) => {
  // Component logic and rendering
  return (
    <div>
      {/* Render your post details using the 'post' prop */}
      <h2>{post.heading}</h2>
      {/* Other details */}
    </div>
  );
};

export default RentPostDetail;
