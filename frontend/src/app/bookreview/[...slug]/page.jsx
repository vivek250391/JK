'use client'
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { isbookIssuedToUser } from "@/lib/bookrevieweventhandler"
import { BookReview } from "@/components/bookreview/book-review"

export default function BookReviewPage(){
    const params=useParams()
    const router=useRouter()
    const [bookissued,setBookIssued]=useState(true)
    useEffect(()=>{
        async function bookissuedwrapper(username,bookissueId){
            const data=await isbookIssuedToUser(username,bookissueId)
            console.log(data)
            if(data.isbookIssued){
                setBookIssued(true)
            }
            else{
                setBookIssued(false)
            }
            return data
        }
        if(params.slug.length==2){
            const username=params.slug[0]
            const bookissueId=params.slug[1]
            //check issued books
            bookissuedwrapper(username,bookissueId)
        
            
            const bookid=params.slug[1]
        }
            

    },[params.slug.length])
    if(params.slug.length!==2)
    {
        return (
            <div>
            <div>invalid number of parameters given</div>
            <button type="button" onClick={()=>router.push('/book/view')}>back to books</button>
            </div>
        )
    }
    return (
        <div>
        {bookissued&&<BookReview userId={params.slug[0]} bookissueId={params.slug[1]}/>}
        {!bookissued&&<div>you cannot review book {params.slug[1]} as you have not issued it in the past</div>}
        </div>
    )
}