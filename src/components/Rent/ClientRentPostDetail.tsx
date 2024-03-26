"use client"
import React, {useEffect, useState} from 'react'
import { RentPostData } from '@/types/data'
import { supabaseClient } from '@/utils/supabase';
import { useAuth, useUser } from '@clerk/nextjs';

const ClientRentPostDetail: React.FC<{ post: RentPostData }> = ({ post: initialPost }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedPost, setEditedPost] = useState<RentPostData>(initialPost);

    const { getToken } = useAuth(); //get Token from clerk
    const {user} = useUser(); // clerk authenicated user

    useEffect(() => {
      setEditedPost(initialPost);
    }, [initialPost]);
    
    // Check if the current user is the creator of the post
    const isUserCreator = user?.id === initialPost.clerk_user_id;

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
    const handleUpdate = async (value: any) => {
      if (!isUserCreator) return;

      const supabaseAccessToken = await getToken({template: 'supabase'}); // get JWT token
      const supabase = await supabaseClient(supabaseAccessToken!) // get supabase token

      const { error } = await supabase
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
      if (!isUserCreator) return;
      const supabaseAccessToken = await getToken({template: 'supabase'}); // get JWT token
      const supabase = await supabaseClient(supabaseAccessToken!) // get supabase token

        if(window.confirm("Are you sure you want to delete this post?")) {
            const {error} = await supabase
            .from('RentPost')
            .delete()
            .match({id:initialPost.id}); // check the RLS policy and id issue !!
            
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

      {editMode ? (
        <>
          <div>
            {/* Heading */}
            <input 
              className="input input-bordered w-full max-w-xs" 
              value={editedPost.heading} 
              onChange={handleChange} 
              name="heading" 
              placeholder="Heading" 
            />

            {/* location */}
            <input 
              className="input input-bordered w-full max-w-xs" 
              value={editedPost.location} 
              onChange={handleChange} 
              name="location" 
              placeholder="Location" 
            />
            {/* type */}
            <input 
              className="input input-bordered w-full max-w-xs" 
              value={editedPost.type} 
              onChange={handleChange} 
              name="type" 
              placeholder="Type" 
            />
            {/* size */}
            <input 
              className="input input-bordered w-full max-w-xs" 
              value={editedPost.size} 
              onChange={handleChange} 
              name="size" 
              placeholder="Size" 
            />
            {/* price */}
            <input 
              className="input input-bordered w-full max-w-xs" 
              value={editedPost.price} 
              onChange={handleChange} 
              name="price" 
              placeholder="Price" 
            />
            {/* date */} 
            <input 
              className="input input-bordered w-full max-w-xs" 
              value={editedPost.date} 
              onChange={handleChange} 
              name="date" 
              placeholder="Date" 
            />
            {/* utilities */}
            <textarea 
              className="textarea textarea-bordered w-full" 
              value={editedPost.utilities} 
              onChange={handleChange} 
              name="utilities" 
              placeholder="Utilities" 
            ></textarea>
            {/* environment */}
            <textarea 
              className="textarea textarea-bordered w-full" 
              value={editedPost.environment} 
              onChange={handleChange} 
              name="environment" 
              placeholder="Environment" 
            ></textarea>  

            <div className="flex justify-end space-x-2 mt-4">
              <button className="btn btn-success" onClick={handleUpdate}>Update</button>
              <button className="btn btn-warning" onClick={handleCancel}>Cancel</button>
            </div>

          </div>
        </>
      ) : (
        <>
            <h2 className="text-2xl font-bold text-gray-800">{initialPost.heading}</h2>
            <p className="text-gray-800 mt-4"><span className="font-semibold">Location:</span> {initialPost.location}</p>
            <p className="text-gray-800 mt-4"><span className="font-semibold">Type:</span> {initialPost.type}</p>
            <p className="text-gray-800 mt-4"><span className="font-semibold">Size:</span> {initialPost.size}</p>
            <p className="text-gray-800 mt-4"><span className="font-semibold">Price:</span> ${initialPost.price}</p>
            <p className="text-gray-800 mt-4"><span className="font-semibold">Available from:</span> {initialPost.date}</p>
            {initialPost.utilities && (
            <div className="text-gray-600 mt-4">
              <label className="block font-semibold" htmlFor="utilities-pre">Utilities:</label>
              <div id="utilities-pre" className="mt-1 w-full h-32 p-4 border border-gray-300 rounded-md shadow-sm text-gray-600 overflow-auto whitespace-pre-wrap">
                {initialPost.utilities}
              </div>
            </div>
          )}
          {initialPost.environment && (
            <div className="text-gray-600 mt-4">
              <label className="block font-semibold" htmlFor="environment-pre">Environment:</label>
              <div id="environment-pre" className="mt-1 w-full h-32 p-4 border border-gray-300 rounded-md shadow-sm text-gray-600 overflow-auto whitespace-pre-wrap">
                {initialPost.environment}
              </div>
            </div>
          )}

          <p className="text-gray-600 mt-4"><span className="font-semibold">TG Contact:</span> {initialPost.contact}</p>
          
          
          {isUserCreator && (
            <div className="flex space-x-2 mt-4">
            <button className="btn btn-primary" onClick={() => setEditMode(true)}>Edit</button>
            <button className="btn btn-error" onClick={handleDelete}>Delete</button>
          </div>
          )}
        </>
        
        )}
        
        </div>
      </div>
  );
}

export default ClientRentPostDetail