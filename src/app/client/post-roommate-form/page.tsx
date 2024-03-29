"use client"
import { RoommatePostData } from '@/types/data';
import { supabaseClient } from '@/utils/supabase';
import { useAuth, useUser } from '@clerk/nextjs';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const RoommatePostForm = () => {
  const {getToken} = useAuth();
  const {user} = useUser();

  const [formData, setFormData] = useState<RoommatePostData>({
    clerk_user_id: user?.id ?? '',
    clerk_username: user?.username ?? '',
    heading: '',
    sex: '',
    preferred_location: '',
    preferred_date:'',
    budget: 0,
    about_me: '',
    about_roommate: '',
    contact: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const dynamicFormData = {
      ...formData,
      clerk_user_id: user?.id ?? '',
      clerk_username: user?.username ?? '',
    };

    const supabaseAccessToken = await getToken({template: 'supabase'});
    const supabase = await supabaseClient(supabaseAccessToken!)

    // Send the form data to Supabase
    const { data, error } = await supabase
      .from('RoommatePost') // Make sure this matches your table name in Supabase
      .insert([dynamicFormData]);
    if (error) throw error;

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="m-8 w-full max-w-lg p-8 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Create a Roommate Post</h2>

        {/* Form elements */}
        <div className="mb-4">
          <label htmlFor="heading" className="block text-sm font-medium text-gray-700">Heading</label>
          <input type="text" id="heading" name="heading" value={formData.heading} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Sex */}
        <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700">Sex</span>
                <div className="mt-2">
                    <label className="inline-flex items-center mr-6">
                      <input type="radio" name="sex" value="Male" onChange={handleChange} checked={formData.sex === 'Male'} className="form-radio" />
                      <span className="ml-2">Male</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="sex" value="Female" onChange={handleChange} checked={formData.sex === 'Female'} className="form-radio" />
                      <span className="ml-2">Female</span>
                    </label>
                </div>
          </div>

        {/* Perferred Location */}
        <div className="mb-4">
          <label htmlFor="preferred_location" className="block text-sm font-medium text-gray-700">Preferred location</label>
          <input type="preferred_location" id="preferred_location" name="preferred_location" value={formData.preferred_location} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Perferred Move-in Date */}
        <div className="mb-4">
          <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700">Preferred date</label>
          <input type="date" id="preferred_date" name="preferred_date" value={formData.preferred_date} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Budget */}
        <div className="mb-4">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
          <input type="number" id="budget" name="budget" value={formData.budget} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* About Me */}
        <div className="mb-4">
          <label htmlFor="about_me" className="block text-sm font-medium text-gray-700">About Me</label>
          <textarea id="about_me" name="about_me" value={formData.about_me} onChange={handleChange} rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
        </div>

        {/* About Roommate */}
        <div className="mb-4">
          <label htmlFor="about_roommate" className="block text-sm font-medium text-gray-700">Roommate Expectation</label>
          <textarea id="about_roommate" name="about_roommate" value={formData.about_roommate} onChange={handleChange}  rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
          <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required/>
        </div>
        
        {/* Submit button */}
        <button type="submit" className="px-4 py-2 bg-accent text-white rounded ">Submit Post</button>

      </form>
    </div>
  );
};

export default RoommatePostForm;
