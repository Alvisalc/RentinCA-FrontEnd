"use client"

import React from 'react'
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/clerk-react'


export const Navbar = () => {

  const { isSignedIn } = useUser();

  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link className="btn btn-ghost text-xl" href="/">移加租屋</Link>
        </div>
        <div className="flex-none">
          {/* Navigation Links */}
          <ul className="menu menu-horizontal px-1 md:flex">
            <li>
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <Link href="/sign-in">登入</Link>
              )}
            </li>
          </ul>
        </div>
    </div>
  )
}
