import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"

const FlightList = ({ flightData }) => {
  const navigate = useNavigate()
  const tdRef = useRef(null)

  //function to navigate to flight details page, when clicked on the table row
  const handleNavigation = (flightId) => {
    navigate(`/flight/${flightId}`)
  }

  return (
    <div>
      <table className='border-collapse border-spacing-1 shadow-lg w-full h-screen text-center'>
        <thead>
          <tr className='bg-cyan-600 text-white'>
            <th className='py-4'>Flight Number</th>
            <th>Airline</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flightData.map((item) => {
            return (
              <tr
                ref={tdRef}
                onClick={() => {
                  handleNavigation(item.id)
                }}
                key={item.id}
                className='cursor-pointer border hover:shadow-md duration-200'
              >
                <td>
                  <p className='bg-cyan-600 inline-block text-white px-2 rounded-lg'>
                    {item.flightNumber}
                  </p>
                </td>
                <td>{item.airline}</td>
                <td>{item.origin}</td>
                <td>{item.destination}</td>
                <td>{new Date(item.departureTime).toLocaleString()}</td>
                <td
                  className={`${
                    item.status.toLowerCase() === "delayed" && "text-red-600"
                  } ${
                    item.status.toLowerCase() === "on time" && "text-green-600"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default FlightList
