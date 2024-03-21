import React from 'react';
// Assuming RentPostData is defined with the fields you've provided
import { RentPostData } from '@/types/data';

type RentPostDetailProps = {
  post: RentPostData;
};

const RentPostDetail: React.FC<RentPostDetailProps> = ({ post }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
    <div className="p-4 md:p-8 lg:p-12 shadow-lg rounded-lg bg-white max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">{post.heading}</h2>
      <p className="text-gray-800 mt-4"><span className="font-semibold">Location:</span> {post.location}</p>
      <p className="text-gray-800 mt-4"><span className="font-semibold">Type:</span> {post.type}</p>
      <p className="text-gray-800 mt-4"><span className="font-semibold">Size:</span> {post.size}</p>
      <p className="text-gray-800 mt-4"><span className="font-semibold">Price:</span> ${post.price}</p>
      <p className="text-gray-800 mt-4"><span className="font-semibold">Available from:</span> {post.date}</p>
      {post.utilities && (
        <div className="text-gray-600 mt-4">
          <label className="block font-semibold" htmlFor="utilities-pre">Utilities:</label>
          <div id="utilities-pre" className="mt-1 w-full h-32 p-4 border border-gray-300 rounded-md shadow-sm text-gray-600 overflow-auto whitespace-pre-wrap">
            {post.utilities}
          </div>
        </div>
      )}
      {post.environment && (
        <div className="text-gray-600 mt-4">
          <label className="block font-semibold" htmlFor="environment-pre">Environment:</label>
          <div id="environment-pre" className="mt-1 w-full h-32 p-4 border border-gray-300 rounded-md shadow-sm text-gray-600 overflow-auto whitespace-pre-wrap">
            {post.environment}
          </div>
        </div>
      )}


      <p className="text-gray-600 mt-4"><span className="font-semibold">TG Contact:</span> {post.contact}</p>
    </div>
  </div>
  );
};

export default RentPostDetail;
