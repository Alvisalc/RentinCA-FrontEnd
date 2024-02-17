import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      
      <p>this is rent page</p>

       {/* Link to the dynamic posts page (replace [page] with the appropriate page number) */}
       <Link href="/posts/[page]" as="/posts/1">
        Go to Posts Page 1
      </Link>
      <Link href="/posts/[page]" as="/posts/2">
        Go to Posts Page 2
      </Link>
      <Link href="/posts/[page]" as="/posts/3">
        Go to Posts Page 3
      </Link>
      
    </div>
  )
}

export default page;