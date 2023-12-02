import { render, screen } from '@testing-library/react'
import Home from '@/pages'

it('should have Hello TEST text', () => {
    render(<Home/>) // ARRANGE

    const myElem = screen.getByText('Hello TEST') // ACTION
    // test text 'Hello TEST' in the screen
    expect(myElem).toBeInTheDocument() // ASSERT
}) 