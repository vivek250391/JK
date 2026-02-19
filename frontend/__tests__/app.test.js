import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import Home from '../src/app/page'


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