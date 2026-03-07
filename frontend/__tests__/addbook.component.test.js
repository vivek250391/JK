import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import { AddBook } from '../src/components/book/add-book'
import {validatebook} from '../src/lib/Addbookeventhandler'
import fetchMock from "jest-fetch-mock"
fetchMock.enableMocks();

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


describe('Home',()=>{
    it('renders div',async ()=>{
        render(<AddBook />)
        const div = screen.getByText(/author/i)
        expect (div).toBeInTheDocument()
    })
})

describe('addbookventhandler',()=>{
    beforeEach(() => {
    // Reset mocks between tests to avoid cross-contamination
    fetch.resetMocks(); 
  });
    it('return success',async ()=>{
        const mockdata={data:{}}
        const book={title:'title',genre:'genre',author:'author'}
        const setError=jest.fn()
        const setSuccess=jest.fn()
        fetch.mockResponseOnce(JSON.stringify(mockdata.data),{status:200,statusText:'Ok'})
        await validatebook(book,setError,setSuccess)
        expect(setSuccess).toHaveBeenCalledTimes(2);
        //expect(validatebook).toHaveBeenCalledTimes(1)
        
    })

    it('return error no author',async ()=>{
        const mockdata={data:{}}
        const book={title:'title',genre:'genre',author:''}
        const setError=jest.fn()
        const setSuccess=jest.fn()
        //fetch.mockResponseOnce(JSON.stringify(mockdata.data),{status:200,statusText:'Ok'})
        await validatebook(book,setError,setSuccess)
        expect(setError).toHaveBeenCalledTimes(2);
        //expect(validatebook).toHaveBeenCalledTimes(1)
        
    })

    it('return error no genre',async ()=>{
        const mockdata={data:{}}
        const book={title:'title',genre:'',author:'author'}
        const setError=jest.fn()
        const setSuccess=jest.fn()
        //fetch.mockResponseOnce(JSON.stringify(mockdata.data),{status:200,statusText:'Ok'})
        await validatebook(book,setError,setSuccess)
        expect(setError).toHaveBeenCalledTimes(2);
        //expect(validatebook).toHaveBeenCalledTimes(1)
        
    })

    it('return error no title',async ()=>{
        const mockdata={data:{}}
        const book={title:'',genre:'genre',author:'author'}
        const setError=jest.fn()
        const setSuccess=jest.fn()
        //fetch.mockResponseOnce(JSON.stringify(mockdata.data),{status:200,statusText:'Ok'})
        await validatebook(book,setError,setSuccess)
        expect(setError).toHaveBeenCalledTimes(2);
        //expect(validatebook).toHaveBeenCalledTimes(1)
        
    })

    it('return error 401',async ()=>{
        const mockdata={data:{}}
        const book={title:'title',genre:'genre',author:'author'}
        const setError=jest.fn()
        const setSuccess=jest.fn()
        fetch.mockResponseOnce(JSON.stringify(mockdata.data),{status:401,statusText:'unauthorized'})
        await validatebook(book,setError,setSuccess)
        expect(setError).toHaveBeenCalledTimes(2);
        expect(fetch).toHaveBeenCalledTimes(1)
        
    })
})