import React from 'react';

export const Page = () => {
  return (
    <section className="min-h-screen bg-base-200">
      <div className="container mx-auto px-5 pt-8 pb-24">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">User Dashboard</h1>
          <p className="mb-8 leading-relaxed text-base">Your personal space to manage posts.</p>
          <div className="flex flex-wrap items-center">
            <button className="mr-4 mb-4 btn btn-secondary">My Post</button>
            <button className="mr-4 mb-4 btn btn-accent">+ 搵人夾租</button>
            <button className="mb-4 btn btn-accent">+ </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;