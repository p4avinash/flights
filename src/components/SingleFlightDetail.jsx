import React from "react"
import { Link, useParams } from "react-router-dom"
import img from "../assets/aircraft.svg"
import useFetch from "../utils/hooks/useFetch"
import { useSelector } from "react-redux"
import { API_URL, SINGLE_FLIGHT } from "../utils/constants"
import { Error } from "../pages"

const SingleFlightDetail = () => {
  const { flightId } = useParams()

  //using custom hook to fetch data for single flight
  useFetch(`${API_URL}/${flightId}`, SINGLE_FLIGHT)

  const data = useSelector((store) => store.app.singleFlightData)

  const {
    id,
    airline,
    departureTime,
    destination,
    flightNumber,
    origin,
    status,
  } = data

  //if flight detail isn't available display error page
  if (Object.keys(data)?.length === 0) {
    return <Error />
  }

  return (
    <div className='flex flex-col items-center capitalize'>
      {/* LINK TO NAVIGATE BACK TO FLIGHTS PAGE */}
      <Link
        to={"/"}
        className='bg-cyan-600 w-36 text-center my-10 text-lg text-white font-semibold px-2 py-1 shadow-lg rounded-lg'
      >
        Back to Flights
      </Link>
      <img className='w-96 mb-8' src={img} alt='aircraft' />
      <div className='data-card shadow-lg px-6 py-4 flex flex-col gap-6 rounded-lg w-full sm:w-2/4'>
        {/* FLIGHT ID */}
        <p className='text-sm sm:text-lg text-gray-600 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-cyan-600 px-2 py-1 rounded-lg text-white'>
            flight id
          </span>
          <span className='text-xl'>{id}</span>
        </p>
        {/* FLIGHT NUMBER */}
        <p className='text-sm sm:text-lg text-gray-600 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-cyan-600 px-2 py-1 rounded-lg text-white'>
            flightNumber
          </span>
          <span className='text-xl'>{flightNumber}</span>
        </p>
        {/* AIRLINE */}
        <p className='text-sm sm:text-lg text-gray-600 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-cyan-600 px-2 py-1 rounded-lg text-white'>
            airline
          </span>
          <span className='text-xl'>{airline}</span>
        </p>
        {/* ORIGIN */}
        <p className='text-sm sm:text-lg text-gray-600 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-cyan-600 px-2 py-1 rounded-lg text-white'>
            origin
          </span>
          <span className='text-xl'>{origin}</span>
        </p>
        {/* DESTINATION */}
        <p className='text-sm sm:text-lg text-gray-600 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-cyan-600 px-2 py-1 rounded-lg text-white'>
            destination
          </span>
          <span className='text-xl'>{destination}</span>
        </p>
        {/* DEPARTURE TIME */}
        <p className='text-sm sm:text-lg text-gray-600 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-cyan-600 px-2 py-1 rounded-lg text-white'>
            departureTime
          </span>
          <span className='text-xl'>
            {new Date(departureTime).toLocaleString()}
          </span>
        </p>
        {/* STATUS */}
        <p className='text-sm sm:text-lg text-gray-600 font-semibold flex justify-between items-center gap-6 border p-2 rounded-lg'>
          <span className='bg-cyan-600 px-2 py-1 rounded-lg text-white'>
            status
          </span>
          <span className='text-xl'>{status}</span>
        </p>
      </div>
    </div>
  )
}

export default SingleFlightDetail
