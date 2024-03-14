import React from 'react';
import { RentPostData } from '@/types/data';


const DashboardCard = ({posts}:{posts: RentPostData[]}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {posts.map((post) => (
        <div key={post.id} className="border border-gray-200 p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{post.heading}</h2>
            <p className="leading-relaxed text-base">${post.price} - {post.location}</p>
            <div className="card-actions justify-end mt-4">
                {/* Replace '/post/[id]' with your actual path to the post detail page */}
                <a href={`/post/${post.id}`} className="btn btn-primary">More</a>
            </div>
        </div>
    ))}
    </div>
  )
}

export default DashboardCard