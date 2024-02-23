import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { supabase } from '../db/supabase';

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostsComponent: React.FC = () => {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!user) return;

      const userId: string = user.id;
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('user_clerk_id', userId);

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, [user]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
