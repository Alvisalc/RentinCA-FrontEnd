"use client"

import React, { useEffect, useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import { supabaseClient } from '@/utils/supabase';
import { RentPostData } from '@/types/data';
import { useRouter } from 'next/navigation'; // Import useRouter


const DashboardCard = () => {
    const { user } = useUser();
    const { getToken } = useAuth();
    const [posts, setPosts] = useState<RentPostData[]>([]);
    const router = useRouter();
  
    useEffect(() => {
        const fetchPosts = async () => {
        const token = await getToken({ template: 'supabase' });
        const supabase = supabaseClient(token!);
         // Define the state with the specific type for your posts
  
        // Assuming your table is named 'posts' and it has a column 'clerk_user_id'
        const { data, error } = await (await supabase)
          .from('RentPost') // or 'RoommatePost', depending on your setup
          .select('*')
          .eq('clerk_user_id', user?.id);
  
        if (error) {
          console.error('Error fetching posts:', error);
        } else {
          setPosts(data);
        }
      };
  
      if (user) {
        fetchPosts();
      }
    }, [user, getToken]);

    const navigateToPost = (postId: string | undefined) => {
        if(postId){
            router.push(`/post/${postId}`); // Use the `push` method from useRouter
        }
    };
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {posts.map((post) => (
        <div key={post.id} className="border border-gray-200 p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{post.heading}</h2>
            <p className="leading-relaxed text-base">${post.price} - {post.location}</p>
            <div className="card-actions justify-end mt-4">
                {/* Replace '/post/[id]' with your actual path to the post detail page */}
                <button className="btn btn-primary" onClick={() => navigateToPost(post.id)}>More</button>
            </div>
        </div>
    ))}
</div>
  )
}

export default DashboardCard