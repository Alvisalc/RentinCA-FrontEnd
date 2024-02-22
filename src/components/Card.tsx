import React from 'react'

const Card = () => {
  return (
    <div className="p-4">
        <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
            <p className="text-sm text-gray-500 mb-4">Posted on Date</p>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">搵人夾租 多倫多七月落地</h2>
            <p className="leading-relaxed text-base">Budget: 1500-1600/month</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">More</button>
            </div>
        </div>
    </div>
  )
}

export default Card