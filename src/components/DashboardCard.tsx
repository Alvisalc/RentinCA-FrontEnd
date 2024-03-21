import React from 'react';
import { RentPostData, RoommatePostData } from '@/types/data';

type DashboardCardProps = {
  rentPosts?: RentPostData[];
  roommatePosts?: RoommatePostData[];
}

const DashboardCard: React.FC<DashboardCardProps> = ({rentPosts, roommatePosts})=> {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Rent Post */}
    {rentPosts?.map((post) => (
        <div key={post.id} className="border border-gray-200 p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{post.heading}</h2>
            <p className="leading-relaxed text-base">${post.price} - {post.location}</p>
            <div className="card-actions justify-end mt-4">
                <a href={`/post/${post.id}`} className="btn btn-primary">More</a>
            </div>
        </div>
    ))}
    {/* Roommate Post */}
    {roommatePosts?.map((post) => (
    <div key={post.id} className="border border-gray-200 p-6 rounded-lg shadow-md">
        <p className="text-sm text-gray-500 mb-4">{new Date(post.preferred_date).toLocaleDateString()}</p>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{post.heading}</h2>
        <p className="leading-relaxed text-base">${post.budget} - {post.preferred_location}</p>
        <div className="card-actions justify-end mt-4">
            <a href={`/post/${post.id}`} className="btn btn-primary">More</a>
        </div>
    </div>
    ))}
    </div>
  )
}

export default DashboardCard