import { render, screen } from "@testing-library/react"
import { Flights } from "../components"

test("renders the flights data", () => {
  render(<Flights />)
  const tableHeader = screen.getByText("Flight Number")
  expect(tableHeader).toBeInTheDocument()
})
