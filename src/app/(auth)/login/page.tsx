import React from 'react'

const page = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-base-300 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-neutral text-white p-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default page;