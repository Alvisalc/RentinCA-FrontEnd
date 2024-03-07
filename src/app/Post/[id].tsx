// pages/post/[id].tsx
import { supabasePublic } from '@/utils/supabase'; // Adjust the import path as needed
import { GetServerSideProps } from 'next';

interface Post {
    id: string;
    heading: string;
    location: string;
    type: string;
    size: string;
    price: number;
    date: string;
    utilities?: string;
    environment?: string;
    contact: string;
  }

  const PostDetails: React.FC<{ post: Post }> = ({ post }) => {
    return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.heading}</h1>
      <p>Date: {new Date(post.date).toLocaleDateString()}</p>
      <p>Location: {post.location}</p>
      <p>Type: {post.type}</p>
      <p>Size: {post.size}</p>
      <p>Price: ${post.price}</p>
      <p>Utilities: {post.utilities}</p>
      <p>Environment: {post.environment}</p>
      <p>Contact: {post.contact}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id as string;
    const { data, error } = await supabasePublic
      .from('RentPost') // check on the token problem.
      .select('*')
      .eq('id', id)
      .single();
  
    if (error) {
      console.error('Error fetching post:', error);
      return { notFound: true };
    }
  
    return { props: { post: data } };
  };
  

export default PostDetails;



