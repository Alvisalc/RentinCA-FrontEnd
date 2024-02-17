import React from 'react'
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link className="btn btn-ghost text-xl" href="/">移加租屋</Link>
        </div>
        <div className="flex-none">

          {/* Hamburger Button */}
          <label className="btn btn-circle swap swap-rotate md:hidden">
            <input type="checkbox" />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          {/* Navigation Links */}
          <ul className="menu menu-horizontal px-1 hidden md:flex">
            <li><Link href="/roommate">夾租區</Link></li>
            <li><Link href="/rent">租屋區</Link></li>
            <li><Link href="/login">登入</Link></li>
          </ul>
        </div>
    </div>
  )
}
