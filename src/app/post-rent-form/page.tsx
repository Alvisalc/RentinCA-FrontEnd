"use client"
import React, { useState } from 'react';

// Testing Page
const RentPostForm = () => {
  const [formData, setFormData] = useState({
    heading: '',
    date: '',
    type: '',
    size: '',
    location: '',
    price: '',
    utilities: '',
    environment: '',
    contact: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Submit formData to your backend or API service here
  };

  return (
    <div className="bg-base-200 flex flex-col items-center justify-center min-h-screen py-8 px-4 md:px-0">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-white rounded shadow">
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
        
        {/* Iterate over formData to create form fields
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="mb-4">
            <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">{key}</label>
            <input
              type={key === 'date' ? 'date' : 'text'}
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required={key !== 'utilities' && key !== 'environment'} // Example of optional fields
            />
          </div>
        ))} */}

        <button type="submit" className="px-4 py-2 bg-accent text-white rounded ">Submit Post</button>
      </form>
    </div>
  );
};

export default RentPostForm;
