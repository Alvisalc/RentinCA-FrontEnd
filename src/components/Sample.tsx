import React from 'react'

export const Sample = () => {

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
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Samples</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">This section is for sample posts ONLY</p>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                    {/* <div className="flex justify-start">
                        <p className="mx-1 select-none rounded-3xl bg-[#1FB2A5] px-3 text-center font-semibold  shadow-lg text-white">夾租</p>
                    </div>  */}
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">搵人夾租 多倫多七月落地</h2>
                    <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                    <p className="leading-relaxed text-base">Budget: 1500-1600/month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">搵人頂租 North York主人房獨立廁所</h2>
                <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                <p className="leading-relaxed text-base">1200/month</p>
                <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
                <p className="text-sm text-gray-500 mb-4">Posted on {formattedDate}</p>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
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
