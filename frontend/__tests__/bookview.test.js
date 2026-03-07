import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import { ViewBook } from "../src/components/book/view-book";
import { getBooks,getBookById } from '../src/lib/viewbookeventhandler';
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

jest.mock('@/components/Header/Header',()=>{
    return jest.fn(({data})=>(
        <div>Hello</div>
    ));
});





describe("bookviewcomponent",()=>{
    it("has button",()=>{
        const asynccall=jest.fn(()=>{
            return {data:[],error:""}
        })
        render(<ViewBook />)
        const button=screen.getByRole('button',{name:/Add book/i})
        expect (button).toBeInTheDocument()
        expect (asynccall().data).toHaveLength(0)
    })

    it("has 1 book",()=>{
        const asynccall=jest.fn(()=>{
            return {data:[{author:"test author",genre:"test genre",title:"test title"}],error:""}
        })
        render(<ViewBook />)
        const button=screen.getByRole('button',{name:/Add book/i})
        expect (button).toBeInTheDocument()
        expect (asynccall().data).toHaveLength(1)
    })

    it("has error",()=>{
        const asynccall=jest.fn(()=>{
            return {data:[],error:"has error"}
        })
        render(<ViewBook />)
        const button=screen.getByRole('button',{name:/Add book/i})
        expect (button).toBeInTheDocument()
        expect (asynccall().error).toBe("has error")
    })
})


describe("eventhandlertest",()=>{
    beforeEach(() => {
    // Reset mocks between tests to avoid cross-contamination
    fetch.resetMocks(); 
  });

    it("has getbooks success fetch",async ()=>{
        const mockdata={data:[{author:"test author",genre:"test genre",title:"test title"}],error:""}
        fetch.mockResponseOnce(JSON.stringify(mockdata.data))
        const result= await getBooks()
         expect(result.data).toHaveLength(1)
         expect(fetch).toHaveBeenCalledTimes(1);
    })

    it("has getbooks failed fetch",async ()=>{
        const mockdata={data:[{author:"test author",genre:"test genre",title:"test title"}],error:""}
        fetch.mockResponseOnce(JSON.stringify({error:"error"}),{status:401,statusText:'unauthorized'})
        const result= await getBooks()
        expect(result.error).toBe("unauthorized")
        expect(fetch).toHaveBeenCalledTimes(1);
    })

    it("get book by book id fetch success",async ()=>{
        const bookId="2d376107-a3c0-41e6-abc3-0a1f5204a26c"
        const mockdata={data:[{author:"test author",genre:"test genre",title:"test title"}],error:""}
        fetch.mockResponseOnce(JSON.stringify(mockdata.data),{status:200,statusText:'ok'})
        const result= await getBookById(bookId)
        expect(result.data).toHaveLength(1)
        expect(fetch).toHaveBeenCalledTimes(1);
    })
   

    it("get book by book id fetch failed",async ()=>{
        const bookId="2d376107-a3c0-41e6-abc3-0a1f5204a26c"
        const mockdata={data:[{author:"test author",genre:"test genre",title:"test title"}],error:""}
        fetch.mockResponseOnce(JSON.stringify({error:"error"}),{status:401,statusText:'unauthorized'})
        const result= await getBookById(bookId)
        expect(result.error).toBe("unauthorized")
        expect(fetch).toHaveBeenCalledTimes(1);
    })
    })
