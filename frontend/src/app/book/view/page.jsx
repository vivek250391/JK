'use client'
import { useRouter } from "next/navigation"
import { ViewBook } from "@/components/book/view-book"
export default function ViewBookPage(){
    const router=useRouter()
    return (
        <div>
            <div><button type="button" onClick={()=>router.push('/')}>Home Page</button></div>
            <ViewBook />
        </div>
    )
}