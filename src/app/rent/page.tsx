"use client"

import React, { useEffect, useState } from 'react';
import { supabasePublic } from '@/utils/supabase';

interface Post {
  id: number;
  date: string;
  heading: string;
  description: string;
}

const Page: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const { data, error } = await supabasePublic
                .from('RentPost') 
                .select('*'); 

            if (error) {
                console.error('Error fetching rent posts:', error);
            } else {
                setPosts(data ?? []);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Calculate current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Calculate page count
    const pageCount = Math.ceil(posts.length / postsPerPage);

    if (loading) return <div>Loading...</div>;

    return (
        <section className="text-gray-600 body-font">
            {/* Your JSX Markup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentPosts.map(post => (
                    <div key={post.id} className="p-4">
                        <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                            <p className="text-sm text-gray-500 mb-4">Posted on {new Date(post.date).toLocaleDateString()}</p>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{post.heading}</h2>
                            <p className="leading-relaxed text-base">{post.description}</p>
                            <div className="card-actions justify-end">
                                <a href={`/rent/${post.id}`} className="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <nav>
                    <ul className="flex list-none">
                        {Array.from({ length: pageCount }, (_, i) => (
                            <li key={i}>
                                <a href="#" onClick={() => paginate(i + 1)} className={`px-4 py-2 mx-1 ${currentPage === i + 1 ? 'text-white bg-blue-500' : 'text-blue-500 bg-white'} rounded-lg`}>
                                    {i + 1}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Page;


