import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import Page from '../src/app/book/add/page'

// jest.mock('next/navigation', () => ({
//   useRouter: jest.fn(() => ({
//     push: jest.fn(),
//     replace: jest.fn(),
//     prefetch: jest.fn(),
//     // Add other router methods you use
//   })),
//   usePathname: jest.fn(() => '/book/add'), // Mock the pathname
//   useSearchParams: jest.fn(() => new URLSearchParams()), // Mock search params
//   // Mock other hooks like useSearchParams if needed
// }));

// jest.mock('@/components/Header/Header',()=>{
//     return jest.fn(({data})=>(
//         <div>Hello</div>
//     ));
// });

jest.mock('@/components/book/add-book',()=>{
    return jest.fn(({data})=>(
        <div>Hello</div>
    ));
});

describe("addbooktests",()=>{
    it("has add book text",()=>{
        try{
            render(<Page />)
        }
        catch(ex){
            console.log(ex)
        }
            
        
        const text=screen.getByText('Add New Book')
        console.log(text)
        expect (text).toBeInTheDocument()
    })
})