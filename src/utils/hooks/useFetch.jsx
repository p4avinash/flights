import { useEffect } from "react"
import { API_POLLILNG_INTERVAL } from "../constants"
import { useDispatch } from "react-redux"
import {
  addAllFlightsDataToStore,
  setIsLoadingFalse,
  addSingleFlightDataToStore,
  setIsLoadingTrue,
  setErrorMessage,
} from "../slices/appSlice"
import { ALL_FLIGHTS, SINGLE_FLIGHT } from "../constants"

//Generic custom hook to fetch data on interval based on the URL passed.
const useFetch = (url, type) => {
  const dispatch = useDispatch()

  //function to fetch data from API
  const fetchData = async () => {
    // dispatch(setErrorMessage(null))
    dispatch(setIsLoadingTrue())
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (type === ALL_FLIGHTS) {
        dispatch(addAllFlightsDataToStore(data))
        dispatch(setErrorMessage(null))
      }
      if (type === SINGLE_FLIGHT) {
        dispatch(addSingleFlightDataToStore(data))
        dispatch(setErrorMessage(null))
      }
      dispatch(setIsLoadingFalse())
    } catch (error) {
      dispatch(setErrorMessage("Something went wrong while fetching the data!"))
      dispatch(setIsLoadingFalse())
    }
  }

  //fetching the data for the first time when component is mounting
  useEffect(() => {
    fetchData()
  }, [])

  //API Polling to get the latest data after intervals
  useEffect(() => {
    const interval = setInterval(fetchData, API_POLLILNG_INTERVAL)
    return () => clearInterval(interval)
  }, [url])
}

export default useFetch
