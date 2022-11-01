import {render, fireEvent, screen} from '@testing-library/react'
import Counter from "./Counter";

describe("Counter", () => {
  test("Increment", () => {
    render(<Counter/>)

    expect(screen.getByText('Count: 0')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })
});
