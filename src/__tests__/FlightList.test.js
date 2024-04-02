import { render, screen } from "@testing-library/react"
import { StaticRouter } from "react-router-dom/server"
import { FlightList } from "../components"
import { mockApiData } from "../mocks/data"
import { Provider } from "react-redux"
import store from "../utils/store"

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(mockApiData[0]),
  })
})

test("render the table header for flight data", () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <FlightList flightData={mockApiData} />
      </Provider>
    </StaticRouter>
  )

  const tableHeader = screen.getByText("Flight Number")
  expect(tableHeader).toBeInTheDocument()
})
