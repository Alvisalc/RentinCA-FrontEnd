"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { supabasePublic } from '@/utils/supabase';
import { RentPostData } from '@/types/data';
import RentPostDetail from '@/components/Rent/RentPostDetail';
import Loading from '@/components/Loading';

const PostDetails = () => {
  const [post, setPost] = useState<RentPostData | null>(null);
  const pathname = usePathname();
  
  // Extracting the post ID from the URL or search parameters
  // Assuming your URL pattern is `/post/[id]`
  const postId = pathname.split('/').pop(); // If ID is part of the URL path

  useEffect(() => {
    const fetchPostData = async () => {
      if (!postId) return;

      const { data, error } = await supabasePublic
        .from('RentPost')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
        return;
      }

      setPost(data);
    };

    fetchPostData();
  }, [postId]);

  if (!post) return <Loading/>;

  return (
    <div>
      <RentPostDetail post={post}/>
    </div>
  );
};

export default PostDetails;

