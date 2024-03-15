// import { useRouter } from "next/navigation"; // Ensure correct import from next/navigation

"use client"
import React, { useEffect, useState } from "react";
import { supabasePublic } from "@/utils/supabase";
import { RentPostData } from "@/types/data";

const PostDetails = () => {
  const [post, setPost] = useState<RentPostData | null>(null);
  // const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const postId = searchParams.get('id');
      const { data, error } = await supabasePublic
        .from("RentPost")
        .select("*")
        .eq("id", postId)
        .single();

      if (error) {
        console.error("Error fetching post:", error);
      } else {
        setPost(data);
      }
    };

    fetchPost();

  }, []); // Depend directly on the relevant part of the router state

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post ? post.heading : 'Post not found'}</h1>
      {/* Additional content and layout for the post details */}
    </div>
  );
};

export default PostDetails;
