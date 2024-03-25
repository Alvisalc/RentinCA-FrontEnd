"use client"
import React, {useEffect, useState} from 'react'
import { RentPostData } from '@/types/data'
import { supabaseClient } from '@/utils/supabase';
import { useUser } from '@clerk/nextjs';

const ClientRentPostDetail: React.FC<{ post: RentPostData }> = ({ post: initialPost }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedPost, setEditedPost] = useState<RentPostData>(initialPost);
    const {user} = useUser();

    useEffect(() => {
      setEditedPost(initialPost);
    }, [initialPost]);
    
    // Check if the current user is the creator of the post
    const isUserCreator = user?.id === initialPost.clerk_user_id;

    // Toogle for edit mode instead of routing to another page
    const toggleEditMode = () => {
        if (!isUserCreator) return;
        setEditMode(!editMode);
    };

    // Cancel logic when user dont want to edit the post
    const handleCancel = () => {
        setEditMode(false);
        setEditedPost(initialPost); // Reset changes
    };

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value} = e.target;
      setEditedPost(prev => ({...prev, [name]: value}));
    }

    // Update post req to supabase
    const handleUpdate = async () => {
      if (!isUserCreator) return;

      const { data, error } = await supabaseClient
      .from('RentPost')
      .update({ ...editedPost })
      .match({ id: editedPost.id });
  
      if (error) {
          alert("Failed to update the post.");
          console.error("Update error:", error);
      } else {
          alert("Post updated successfully:");
          setEditMode(false); // Exit edit mode
      }
    }
    // Delete post req to supabase
    const handleDelete = async () => {
        if(window.confirm("Are you sure you want to delete this post?")) {
            const {error} = await supabaseClient
            .from('RentPost')
            .delete()
            .match({id: post.id}); // check the RLS policy and id issue !!
            
            if (error) {
                alert("Failed to delete the post.");
                console.error("Delete error:", error);
            } else {
                alert("Post deleted successfully.");
            }
        }
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
    <div className="p-4 md:p-8 lg:p-12 shadow-lg rounded-lg bg-white max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">{post.heading}</h2>
      <p className="text-gray-800 mt-4"><span className="font-semibold">Location:</span> {post.location}</p>
      <p className="text-gray-800 mt-4"><span className="font-semibold">Type:</span> {post.type}</p>
      <p className="text-gray-800 mt-4"><span className="font-semibold">Size:</span> {post.size}</p>
      <p className="text-gray-800 mt-4"><span className="font-semibold">Price:</span> ${post.price}</p>
      <p className="text-gray-800 mt-4"><span className="font-semibold">Available from:</span> {post.date}</p>
      {post.utilities && (
        <div className="text-gray-600 mt-4">
          <label className="block font-semibold" htmlFor="utilities-pre">Utilities:</label>
          <div id="utilities-pre" className="mt-1 w-full h-32 p-4 border border-gray-300 rounded-md shadow-sm text-gray-600 overflow-auto whitespace-pre-wrap">
            {post.utilities}
          </div>
        </div>
      )}
      {post.environment && (
        <div className="text-gray-600 mt-4">
          <label className="block font-semibold" htmlFor="environment-pre">Environment:</label>
          <div id="environment-pre" className="mt-1 w-full h-32 p-4 border border-gray-300 rounded-md shadow-sm text-gray-600 overflow-auto whitespace-pre-wrap">
            {post.environment}
          </div>
        </div>
      )}


      <p className="text-gray-600 mt-4"><span className="font-semibold">TG Contact:</span> {post.contact}</p>
          <div className="flex space-x-2 mt-4">
                {isUserCreator && editMode ? (
                    <>
                        <button className="btn btn-success" onClick={handleUpdate}>Update</button>
                        <button className="btn btn-warning" onClick={handleCancel}>Cancel</button>
                    </>
                ) : isUserCreator ? (
                    <>
                        <button className="btn btn-primary" onClick={toggleEditMode}>Edit</button>
                        <button className="btn btn-error" onClick={handleDelete}>Delete</button>
                    </>
                ) : null}
            </div>

    </div>
  </div>
  );
}

export default ClientRentPostDetail