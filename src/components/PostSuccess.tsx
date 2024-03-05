import Link from 'next/link'
import React from 'react'

export const PostSuccess = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Post Success</h1>
        <p className="py-6">Your Post is Successfully Created</p>
        <div className="flex space-x-4 justify-center">
          <Link href="/dashboard"><button className="btn-lg btn sm:btn-sm md:btn-md lg:btn-lg btn-secondary">返回主頁</button></Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PostSuccess;