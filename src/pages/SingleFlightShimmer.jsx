import React from "react"

const SingleFlightShimmer = () => {
  return (
    <div className='flex flex-col items-center capitalize'>
      {/* LINK TO NAVIGATE BACK TO FLIGHTS PAGE */}
      <div className='button-div w-32 h-10 bg-gray-400 my-10 rounded-lg'></div>
      <div className='image-div w-72 h-40 bg-gray-400 mb-8 rounded-lg'></div>
      <div className='data-card shadow-lg px-6 py-4 flex flex-col gap-6 rounded-lg w-full sm:w-2/4'>
        {/* FLIGHT ID */}
        <p className='text-sm sm:text-lg bg-gray-200 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-gray-400 px-2 py-1 rounded-lg text-white w-32 h-10'></span>
          <span className='text-xl'>{}</span>
        </p>
        {/* FLIGHT NUMBER */}
        <p className='text-sm sm:text-lg bg-gray-200 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-gray-400 px-2 py-1 rounded-lg text-white w-32 h-10'></span>
          <span className='text-xl'>{}</span>
        </p>
        {/* AIRLINE */}
        <p className='text-sm sm:text-lg bg-gray-200 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-gray-400 px-2 py-1 rounded-lg text-white w-32 h-10'></span>
          <span className='text-xl'>{}</span>
        </p>
        {/* ORIGIN */}
        <p className='text-sm sm:text-lg bg-gray-200 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-gray-400 px-2 py-1 rounded-lg text-white w-32 h-10'></span>
          <span className='text-xl'>{}</span>
        </p>
        {/* DESTINATION */}
        <p className='text-sm sm:text-lg bg-gray-200 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-gray-400 px-2 py-1 rounded-lg text-white w-32 h-10'></span>
          <span className='text-xl'>{}</span>
        </p>
        {/* DEPARTURE TIME */}
        <p className='text-sm sm:text-lg bg-gray-200 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-gray-400 px-2 py-1 rounded-lg text-white w-32 h-10'></span>
          <span className='text-xl'>{}</span>
        </p>
        {/* STATUS */}
        <p className='text-sm sm:text-lg bg-gray-200 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-gray-400 px-2 py-1 rounded-lg text-white w-32 h-10'></span>
          <span className='text-xl'>{}</span>
        </p>
      </div>
    </div>
  )
}

export default SingleFlightShimmer
