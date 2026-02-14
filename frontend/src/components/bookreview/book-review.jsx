'use client'
import styles from "@/components/bookreview/book-review.module.css"
import { useState } from "react"

import { validate } from "@/lib/bookrevieweventhandler"
export function BookReview({bookissueId,userId}){
    const [review,setReview]=useState('')
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    return(
        <div>
            Review Book at bookissueID:{bookissueId} by user {userId}
            <div><textarea onChange={(event)=>setReview(event.target.value)} /></div>
            <div className={styles.error}>
                {error}
            </div>
            <div className={styles.success}>
                {success}
            </div>
            <button type="button" onClick={()=>validate(bookissueId,review,userId,setError,setSuccess)}>Submit Review</button>
        </div>
    )
}