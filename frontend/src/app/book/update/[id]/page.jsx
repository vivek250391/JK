'use client'
import { useParams } from "next/navigation"
import { EditBook } from "@/components/book/edit-book"
export default function UpdateBookPage(){
    const params=useParams()
    return (
        <div>
            <EditBook id={params.id}/>
        </div>
    )
}