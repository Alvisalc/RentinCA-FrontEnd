"use client"
import React, { useState } from 'react';

const RoommatePostForm = () => {
  const [formData, setFormData] = useState({
    heading: '',
    date: '',
    sex: '',
    budget: '',
    preferred_location: '',
    about_me: '',
    roommate_expectation: '',
    contact: ''
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Handle form submission, e.g., send data to your backend or API
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Create a Roommate Post</h2>

        {/* Simplified input structure for demonstration */}
        <div className="mb-4">
          <label htmlFor="heading" className="block text-sm font-medium text-gray-700">Heading</label>
          <input type="text" id="heading" name="heading" value={formData.heading} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Sex */}
        <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700">Sex</span>
                <div className="mt-2">
                    <label className="inline-flex items-center mr-6">
                        <input 
                            type="radio" 
                            name="sex" 
                            value="Male" 
                            onChange={handleInputChange} 
                            checked={formData.sex === 'Male'} 
                            className="form-radio" 
                        />
                            <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                        <input 
                            type="radio" 
                            name="sex" 
                            value="Female" 
                            onChange={handleInputChange} 
                            checked={formData.sex === 'Female'} 
                            className="form-radio" 
                        />
                        <span className="ml-2">Female</span>
                </label>
            </div>
        </div>

        {/* Include inputs for all fields in your form */}
        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Budget */}
        <div className="mb-4">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
          <input type="number" id="budget" name="budget" value={formData.budget} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* About Me */}
        <div className="mb-4">
          <label htmlFor="about_me" className="block text-sm font-medium text-gray-700">About Me</label>
          <textarea id="about_me" name="about_me" value={formData.about_me} onChange={handleInputChange} rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
        </div>

        {/* Roommate Expectation */}
        <div className="mb-4">
          <label htmlFor="roommate_expectation" className="block text-sm font-medium text-gray-700">Roommate Expectation</label>
          <textarea id="roommate_expectation" name="roommate_expectation" value={formData.roommate_expectation} onChange={handleInputChange} rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
        </div>

        

        <button type="submit" className="px-4 py-2 bg-accent text-white rounded ">Submit Post</button>
      </form>
    </div>
  );
};

export default RoommatePostForm;
