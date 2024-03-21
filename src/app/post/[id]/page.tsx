"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { RentPostData, RoommatePostData } from '@/types/data';
import { supabasePublic } from '@/utils/supabase';
import ClientRoommatePost from '@/components/Roommate/ClientRoommatePostDetail';
import ClientRentPostDetail from '@/components/Rent/ClientRentPostDetail';

// Define a type that can hold either a rent post or a roommate post
type CombinedPost = RentPostData | RoommatePostData;

const Page = () => {
  const [post, setPost] = useState<CombinedPost | null>(null);
  const [postType, setPostType] = useState<'rent' | 'roommate' | null>(null);
  const pathname = usePathname();

  const postId = pathname.split('/').pop();

  useEffect(() => {
    const fetchPostData = async () => {
      if (!postId) return;

      // Try to fetch from the rent posts table first
      let { data: rentData, error: rentError } = await supabasePublic
        .from('RentPost')
        .select('*')
        .eq('id', postId)
        .single();

      if (rentData) {
        setPost(rentData);
        setPostType('rent');
        return;
      }

      // If not found in rent posts, try the roommate posts table
      let { data: roommateData, error: roommateError } = await supabasePublic
        .from('RoommatePost')
        .select('*')
        .eq('id', postId)
        .single();

      if (roommateData) {
        setPost(roommateData);
        setPostType('roommate');
        return;
      }

      // Handle errors if needed
      if (rentError) console.error(rentError.message);
      if (roommateError) console.error(roommateError.message);
    };

    fetchPostData();
  }, [postId]);

  return (
    <div>
      {postType === 'rent' && (
        <div>
          {/* Render rent post details */}
          <ClientRentPostDetail post={post as RentPostData}/>
        </div>
      )}
      {postType === 'roommate' && (
        <div>
          {/* Render roommate post details */}
          <ClientRoommatePost post={post as RoommatePostData}/>
        </div>
      )}
      {!post && (
        <p>Post not found or does not exist.</p>
      )}
    </div>
  );
};

export default Page;
