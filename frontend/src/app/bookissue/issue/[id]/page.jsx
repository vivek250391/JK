'use client'
import { useParams } from "next/navigation"
import { IssueBook } from "@/components/bookissue/issue-book"
export default function IssueBookPage(){
    const book=useParams()
    return (
        <div>
           <IssueBook id={book.id} />
        </div>
    )
}