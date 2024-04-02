import React from "react"
import useFetch from "../utils/hooks/useFetch"
import FlightList from "./FlightList"
import { Shimmer } from "../pages"
import { useSelector } from "react-redux"
import { ALL_FLIGHTS, API_URL } from "../utils/constants"
import useIsOnline from "../utils/hooks/useIsOnline"
import warningImg from "../assets/warning.svg"

const Flights = () => {
  //using custom hooks to check online staus
  const isOnline = useIsOnline()

  //using custom hook to fetch the data from API
  useFetch(API_URL, ALL_FLIGHTS)

  const data = useSelector((store) => store.app.allFlightsData)
  const errorMessage = useSelector((store) => store.app.errorMessage)

  //Code to display message if user's internet connection is lost while using the app
  if (!isOnline) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <img className='w-96' src={warningImg} alt='warning' />
        <h1 className='text-lg sm:text-3xl text-gray-600 mt-10'>
          🔴 Offline, Please check you internet connection
        </h1>
      </div>
    )
  }

  //Code to display message when there's some issue when fetching data from API
  if (errorMessage) {
    return (
      <div>
        <div className='flex flex-col items-center justify-center h-screen'>
          <img className='w-96' src={warningImg} alt='warning' />
          <h1 className='text-lg sm:text-3xl text-gray-600 mt-10 '>
            {errorMessage}
          </h1>
        </div>
      </div>
    )
  }

  //Show shimmer UI to the user when app loads for the first time
  if (data?.length === 0) {
    return <Shimmer />
  }

  return (
    <div>
      <FlightList flightData={data} />
    </div>
  )
}

export default Flights
