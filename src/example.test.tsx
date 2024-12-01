import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export const Button = (): JSX.Element => {
  const [state, setState] = useState(0)

  const handleClick = (): void => {
    setState((value) => value + 1)
  }

  return (
    <>
      <button onClick={handleClick} type="button">
        Click me
      </button>
      <p>Clicked {state} times</p>
    </>
  )
}

describe('Button', () => {
  it('should increase value', async () => {
    render(<Button />)

    const button: HTMLElement = screen.getByRole('button', { name: /click me/i })

    const paragraph: HTMLElement = screen.getByText(/clicked 0 times/i)

    await userEvent.click(button)
    await userEvent.click(button)
    await userEvent.click(button)

    expect(paragraph.textContent).toBe('Clicked 1 times')
  })
})
