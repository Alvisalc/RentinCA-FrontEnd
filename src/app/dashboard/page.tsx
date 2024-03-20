"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DashboardCard from '@/components/DashboardCard';
import { useAuth, useUser } from '@clerk/nextjs';
import { RentPostData, RoommatePostData } from '@/types/data';
import { supabaseClient } from '@/utils/supabase';


export const Page = () => {
  // fetch user data
  const { user } = useUser();
  const { getToken } = useAuth();
  const [rentPosts, setRentPosts] = useState<RentPostData[]>([]);
  const [roommatePosts, setRoommatePosts] = useState<RoommatePostData[]>([]); 

  useEffect(() => {
      const fetchPosts = async () => {
      const token = await getToken({ template: 'supabase' });
      const supabase = supabaseClient(token!);
      // Fetch RentPost
      const { data: rentPostsData, error: rentPostsError } = await (await supabase)
      .from('RentPost')
      .select('*')
      .eq('clerk_user_id', user?.id);

      if (rentPostsError) {
          console.error('Error fetching rent posts:', rentPostsError);
      } else {
        setRentPosts(rentPostsData || []);
      }

        // Fetch RoommatePost
        const { data: roommatePostsData, error: roommatePostsError } = await (await supabase)
            .from('RoommatePost')
            .select('*')
            .eq('clerk_user_id', user?.id);

        if (roommatePostsError) {
            console.error('Error fetching roommate posts:', roommatePostsError);
        } else {
          setRoommatePosts(roommatePostsData || []);
        }

    };

    if (user) {
      fetchPosts();
    }
  }, [user, getToken]);

  return (
    <section className="min-h-screen bg-base-200">
      <div className="container mx-auto px-5 pt-8 pb-24">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">User Dashboard</h1>
          <p className="mb-8 leading-relaxed text-base">Your personal space to manage posts.</p>

          <div className="flex flex-wrap items-center">
            {/* Show these buttons only if the user data has been synced */}
            <button className="mr-4 mb-4 btn btn-secondary">My Post</button>
            <Link href="/post-selection">
              <button className="mr-4 mb-4 btn btn-accent">+ Create a new post</button>
            </Link>
          </div>

        <div className="post-section">
          <DashboardCard rentPosts={rentPosts} roommatePosts={roommatePosts}/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Page;