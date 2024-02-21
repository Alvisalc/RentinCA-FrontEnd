import Link from 'next/link'
import React from 'react'

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">香港人移加租屋網</h1>
        <p className="py-6">此網站旨在幫香港人更容易在加拿大搵人夾租同租屋</p>
        <div className="flex space-x-4 justify-center">
          <Link href="/roommate"><button className="btn-lg btn sm:btn-sm md:btn-md lg:btn-lg btn-secondary">搵人夾租</button></Link>
          <Link href="/rent"><button className="btn-lg btn sm:btn-sm md:btn-md lg:btn-lg btn-accent">想搵屋租</button></Link>
        </div>
      </div>
    </div>
  </div>
  )
}
