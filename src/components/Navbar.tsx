import React from 'react'
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link className="btn btn-ghost text-xl" href="/">移加租屋</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/roomate">夾租區</Link>
            </li>
            <li><Link href="/Rent">租屋區</Link></li>
            <li><Link href="/Login">登入</Link></li>
            </ul>
        </div>
    </div>
  )
}
