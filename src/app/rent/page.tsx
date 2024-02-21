import React from 'react'
import Link from 'next/link'

const page = () => {
        // Get the current date
        const currentDate = new Date();
    
        // Format the date as "Month Day, Year"
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">搵屋租樓區</h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">This section is for sample posts ONLY</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">搵人夾租 多倫多七月落地</h2>
                <p className="leading-relaxed text-base">Budget: 1500-1600/month</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">More</button>
                </div>
                </div>
            </div>
            <div className="p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                    <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">搵人頂租 North York主人房獨立廁所</h2>
                    <p className="leading-relaxed text-base">Price: 1200/month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                    <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Condo放租一房獨立廁所 一年租約</h2>
                    <p className="leading-relaxed text-base">Price: 1500/month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">搵人夾租 多倫多七月落地</h2>
                <p className="leading-relaxed text-base">Budget: 1500-1600/month</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">More</button>
                </div>
                </div>
            </div>
            <div className="p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                    <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">搵人頂租 North York主人房獨立廁所</h2>
                    <p className="leading-relaxed text-base">Price: 1200/month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                    <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Condo放租一房獨立廁所 一年租約</h2>
                    <p className="leading-relaxed text-base">Price: 1500/month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                    <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Condo放租一房獨立廁所 一年租約</h2>
                    <p className="leading-relaxed text-base">Price: 1500/month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                    <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Condo放租一房獨立廁所 一年租約</h2>
                    <p className="leading-relaxed text-base">Price: 1500/month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                    <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Condo放租一房獨立廁所 一年租約</h2>
                    <p className="leading-relaxed text-base">Price: 1500/month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default page;