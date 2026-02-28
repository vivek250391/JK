'use client'
import { useRouter } from "next/navigation"
import { IssueBookView } from "@/components/bookissue/issue-book-view"

export default function BookIssuePage(){
    const router=useRouter()
    return (
        <div>
            <div><button type="button" onClick={()=>router.push('/')}>Home Page</button></div>
            <IssueBookView />
        </div>
    )
}