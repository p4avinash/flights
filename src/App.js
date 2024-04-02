import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomeLayout, Error } from "./pages"
import { Flights, SingleFlightDetail } from "./components"

//Setting for routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Flights />, errorElement: <Error /> },
      {
        path: "flight/:flightId",
        element: <SingleFlightDetail />,
        errorElement: <Error />,
      },
    ],
  },
])

function App() {
  return (
    <div className=''>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
