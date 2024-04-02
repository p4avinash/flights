import React from "react"

//NOT IN USE
const Shimmer = () => {
  return (
    <table className='border-collapse border-spacing-1 shadow-lg w-full h-screen text-center'>
      <thead>
        <tr className='bg-gray-300 text-white'>
          <th className='py-4'> ‎ </th>
          <th>‎ </th>
          <th>‎ </th>
          <th>‎ </th>
          <th>‎ </th>
          <th>‎ </th>
        </tr>
      </thead>
      <tbody>
        {Array(13)
          .fill("")
          .map((item, index) => {
            return (
              <tr key={index} className={`border`}>
                <td>
                  <p className='bg-gray-300 inline-block text-white px-2 rounded-lg w-16 float-start mx-36'>
                    ‎
                  </p>
                </td>
                <td>‎ </td>
                <td>‎ </td>
                <td>‎ </td>
                <td>‎ </td>
                <td>‎ </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default Shimmer
