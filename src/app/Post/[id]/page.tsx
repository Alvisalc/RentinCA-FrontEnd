import { useRouter } from "next/navigation"; // Ensure correct import from next/navigation
import React, { useEffect, useState } from "react";
import { supabasePublic } from "@/utils/supabase";
import { RentPostData } from "@/types/data";

const PostDetails = () => {
  const [post, setPost] = useState<RentPostData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const postId = router.query.id as string; // Directly attempt to access the dynamic route parameter

      if (!postId) {
        console.log("Post ID not available yet.");
        return; // Optionally, handle this case more gracefully
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
  }, [router.query.id]); // Depend directly on the relevant part of the router state

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.heading}</h1>
      {/* Additional content and layout for the post details */}
    </div>
  );
};

export default PostDetails;
