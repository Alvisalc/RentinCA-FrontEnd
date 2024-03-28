import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Card for Create a Post for Rental */}
        <div className="bg-base-100 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-left">
            <div className="w-full max-w-md"> {/* Additional div for content alignment */}
              <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Create a Post for Rental</h2>
              <p className="text-gray-700 mb-4">Share your property for rent and find tenants quickly.</p>
              <div className="flex justify-center w-full">
                <Link href="/post-rent-form"><button className="btn btn-primary">Create Rental Post</button></Link>
              </div>
            </div>
          </div>

          {/* Card for Create a Post for Looking a Roommate */}
          <div className="bg-base-100 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Create a Post for Looking a Roommate</h2>
              <p className="text-gray-700 mb-4 text-center md:text-left">Find someone to share your living space with.</p>
              <div className="flex justify-center w-full">
                <Link href="/post-roommate-form"><button className="btn btn-secondary">Find a Roommate</button></Link>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default Page;
