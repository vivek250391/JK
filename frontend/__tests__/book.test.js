import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import ViewBookPage from '../src/app/book/view/page'

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

jest.mock('@/components/book/view-book',()=>{
    return jest.fn(({data})=>(
        <div>Hello</div>
    ));
});

describe('book page',()=>{
    it('has home button',async ()=>{
        render(<ViewBookPage />)

        const button = screen.getByRole('button',{name:/Home Page/i})
        expect (button).toBeInTheDocument()
    })
})

