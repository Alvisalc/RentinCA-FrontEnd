import { supabase } from '../../db/supabase';

export async function getServerSideProps() {
  const { data: posts, error } = await supabase.from('posts').select('*');
  
  if (error) {
    console.error('Error fetching posts:', error);
    return { props: { posts: [] } };
  }

  return { props: { posts } };
}

function PostsPage({ posts }) {
  // Render posts
}
