"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { supabaseClient } from '../../../utils/supabase'; // Supabase Client API
import { useAuth, useUser } from "@clerk/nextjs"; // clerk hooks
import { RentPostData } from '@/types/data'; // Data type of Rent Post Data

const RentPostForm: React.FC = () => {
  const { getToken } = useAuth(); //get Token from clerk
  const { user } = useUser(); // clerk authenicated user

  // Form data with useState using the RentPostData interface
  const [formData, setFormData] = useState<RentPostData>({
    clerk_user_id: user?.id ?? '',
    clerk_username: user?.username ?? '',
    heading: '',
    location: '',
    type: '',
    size: '',
    price: 0,
    date: '',
    utilities: '',
    environment: '',
    contact: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // handle Stubmit function
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // insert clerk_user_id & username to the database
    const dynamicFormData = {
      ...formData,
      clerk_user_id: user?.id ?? '',
      clerk_username: user?.username ?? '',
    };

    const supabaseAccessToken = await getToken({template: 'supabase'}); // get JWT token
    const supabase = await supabaseClient(supabaseAccessToken!) // get supabase token

    // Send the form data to Supabase
    const { data, error } = await supabase
      .from('RentPost') // Supabase database Table
      .insert([dynamicFormData]); //insert row data
    if (error) throw error;
    console.log('Rent post submitted successfully:', data);
  };

  return (
    <div className="bg-base-200 flex flex-col items-center justify-center min-h-screen py-8 px-4 md:px-0">
      <form onSubmit={handleSubmit} className="m-8 w-full max-w-lg p-8 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Create a Rent Post</h2>

        <div className="mb-4">
          <label htmlFor="heading" className="block text-sm font-medium text-gray-700">Heading</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Radio buttons for 'type' */}
        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-700">Type</span>
          <div className="mt-2">
            {["condo", "apartment", "house"].map((typeOption) => (
              <label key={typeOption} className="inline-flex items-center mr-6">
                <input 
                  type="radio" 
                  name="type" 
                  value={typeOption} 
                  onChange={handleChange} 
                  checked={formData.type === typeOption} 
                  className="form-radio" 
                />
                <span className="ml-2 capitalize">{typeOption}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Input for 'size' */}
        <div className="mb-4">
          <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
          <input
            type="text"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Input for 'location' */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Utilities Textarea */}
        <div className="mb-4">
        <label htmlFor="utilities" className="block text-sm font-medium text-gray-700">Utilities</label>
        <textarea
            id="utilities"
            name="utilities"
            value={formData.utilities}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        ></textarea>
        </div>

        {/* Environment Textarea */}
        <div className="mb-4">
        <label htmlFor="environment" className="block text-sm font-medium text-gray-700">Environment</label>
        <textarea
            id="environment"
            name="environment"
            value={formData.environment}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        ></textarea>
        </div>


        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <button type="submit" className="px-4 py-2 bg-accent text-white rounded ">Submit Post</button>
      </form>
    </div>
  );
};

export default RentPostForm;
