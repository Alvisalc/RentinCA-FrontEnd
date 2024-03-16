"use client"
import React, { useEffect, useState } from "react";
import { supabasePublic } from "@/utils/supabase";
import { RentPostData } from "@/types/data";

const PostDetails = () => {
  const [post, setPost] = useState<RentPostData | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      // Directly using URLSearchParams to parse the query string
      const searchParams = new URLSearchParams(window.location.search);
      const postId = searchParams.get('id');

      if (!postId) {
        console.error("No post ID found in the URL");
        return;
      }

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
  }, []); // No dependencies needed as we only fetch data once on component mount

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.heading}</h1>
      {/* Display the rest of your post details here */}
    </div>
  );
};

export default PostDetails;
