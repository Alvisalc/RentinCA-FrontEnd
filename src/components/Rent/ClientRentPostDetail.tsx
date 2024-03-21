"use client"
import React, {useState} from 'react'
import { RentPostData } from '@/types/data'
import { supabasePublic } from '@/utils/supabase';

type RentPostDataProps = {
    post: RentPostData;
}

const ClientRentPostDetail: React.FC<RentPostDataProps> = ({post}) => {
    const [editMode, setEditMode] = useState(false);
    const [editedPost, setEditedPost] = useState(post);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleCancel = () => {
        setEditMode(false);
        setEditedPost(post); // Reset changes
    };
    // Update post req to supabase
    const handleUpdate = async () => {
      const { error } = await supabasePublic
      .from('RentPost')
      .update({ ...editedPost })
      .match({ id: post.id });
  
      if (error) {
          alert("Failed to update the post.");
          console.error("Update error:", error);
      } else {
          alert("Post updated successfully.");
          setEditMode(false); // Exit edit mode
      }
    }
    // Delete post req to supabase
    const handleDelete = async () => {
        if(window.confirm("Are you sure you want to delete this post?")) {
            const {error} = await supabasePublic
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
            <button
                className="btn btn-primary"
                onClick={handleUpdate}
            >
                Edit
            </button>
            <button
                className="btn btn-error"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>

    </div>
  </div>
  );
}

export default ClientRentPostDetail