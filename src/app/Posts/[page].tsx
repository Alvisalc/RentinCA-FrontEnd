import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Post, PageParams } from '@/types/data';
import { posts } from '../data';

// Simulated data fetching (replace this with your actual data fetching logic)
const fetchPosts = (pageNumber: number) => {
  const startIndex = (pageNumber - 1) * 12;
  const endIndex = startIndex + 12;
  return posts.slice(startIndex, endIndex);
};

const PostsPage = ({ posts }: { posts: Post[] }) => {
  const router = useRouter();
  const { page } = router.query;
  const [currentPage, setCurrentPage] = useState(parseInt(page as string) || 1);

  useEffect(() => {
    // Fetch posts when the page number changes
    if (page) {
      const parsedPage = parseInt(page as string);
      setCurrentPage(parsedPage);
    }
  }, [page]);

  return (
    <div>
      {/* Display posts */}
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <h2>{post.heading}</h2>
            <p>{post.price}</p>
            <p>Posted on: {post.date}</p>
            {/* Add other details you want to display */}
          </li>
        ))}
      </ul>

      {/* Pagination links */}
      <div>
        {Array.from({ length: Math.ceil(posts.length / 12) }, (_, i) => (
          <span key={i + 1}>
            <Link href={`/posts/${i + 1}`}>
              <a>{i + 1}</a>
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const totalPages = Math.ceil(posts.length / 12);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: {params: PageParams }) {
  const currentPage = parseInt(params.page, 10);
  const startIndex = (currentPage - 1) * 12;
  const endIndex = startIndex + 12;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  return {
    props: {
      posts: paginatedPosts,
    },
  };
}

export default PostsPage;
