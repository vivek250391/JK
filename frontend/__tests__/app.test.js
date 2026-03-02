import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import Home from '../src/app/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    // Add other router methods you use
  })),
  usePathname: jest.fn(() => '/'), // Mock the pathname
  useSearchParams: jest.fn(() => new URLSearchParams()), // Mock search params
  // Mock other hooks like useSearchParams if needed
}));


jest.mock('@/components/Header/Header',()=>{
    return jest.fn(({data})=>(
        <div>Hello</div>
    ));
});

describe('Home',()=>{
    it('renders div',async ()=>{
        render(<Home />)
        const div = await screen.findByText(/Home Page/i)
        expect (div).toBeInTheDocument()
    })
})

describe('Home Page buttons Manage Books',()=>{
    it('has manage books button',async ()=>{
        render(<Home />)
        const button= screen.getByRole('button',{name:/Manage Books/i})
        expect(button).toBeInTheDocument()
    })
})

describe('Home Page buttons Manage issued Books',()=>{
    it('has manage books button',async ()=>{
        render(<Home />)
        const button=screen.getByRole('button',{name:/Manage issued Books/i})
        expect(button).toBeInTheDocument()
    })
})