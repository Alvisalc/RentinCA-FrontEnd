// pages/post/[id].tsx or within your app structure
"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { supabasePublic } from "@/utils/supabase";
import { RentPostData } from "@/types/data";

const PostDetails = () => {
  const [post, setPost] = useState<RentPostData | null>(null);
  const router = useRouter();
  const postId = router.query.id as string;

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return;
      const { data, error } = await supabasePublic
        .from("RentPost")
        .select("*")
        .eq("id", postId)
        .single();

      if (error) console.error("Error fetching post:", error);
      else setPost(data);
    };

    fetchPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.heading}</h1>
      <div className="flex justify-end gap-4">
      </div>
    </div>
  );
};

export default PostDetails;
