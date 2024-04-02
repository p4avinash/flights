import React from "react"
import notFoundImage from "../assets/not-found.svg"
import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()

  if (error?.status === 404) {
    return (
      <div className='flex flex-col items-center justify-center h-[80vh]'>
        <img className='mb-8 w-96' src={notFoundImage} alt='not found' />
        <h3 className='text-5xl text-gray-700'>Oops!</h3>
        <p className='text-gray-700 text-xl'>
          We can't find the page you're looking for
        </p>
        <Link className='text-cyan-600 text-xl mt-6' to={"/"}>
          Back to Flights
        </Link>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center gap-6 justify-center h-[80vh]'>
      <h3 className='text-5xl text-gray-700'>Oops!</h3>
      <p className='text-gray-700 text-xl'>Something went wrong</p>
      <p className='text-gray-700 text-xl'>{error?.data}</p>
      <Link className='text-cyan-600 text-xl mt-6' to={"/"}>
        Back to Flights
      </Link>
    </div>
  )
}

export default Error
