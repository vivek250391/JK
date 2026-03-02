'use client'

import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

import {BooktoReturn,ReturnBook} from '@/lib/bookissuehandler'
import Styles from '@/components/bookissue/issue-book-return-view.module.css'

export function ReturnBookView(){
    const [issuedBooks,setIssueBooks]=useState([])
    const [error,setError]=useState('')
    const router=useRouter()

    useEffect(()=>{
        async function wrapper(){
            const data=await BooktoReturn()
            if(data.error.length>0)
                setError(data.error)
            else
                setIssueBooks(data.data)
        }
        wrapper()
        
    },[])

    function renderissuedBooks(issuedbook,index){
        return (
            <div className={Styles.book} key={issuedbook.id}>
               <div>issued id:{issuedbook.id}</div> 
                <div>borrowDate:{issuedbook.borrowDate}</div>
                <div>userid:{issuedbook.userId}</div>
                <div>bookId:{issuedbook.bookId}</div>
                <div><button type="button" onClick={async ()=>await ReturnBook(issuedbook.id,router,setError)}>Return book</button></div>
            </div>
        )
    }

    return (
        <div className={Styles.returnBooks}>
            <button onClick={()=>router.push("/bookissue")}>return to issue book</button>
            {error.length>0&&<div className={Styles.error}>{error}</div>}
            {issuedBooks.map((issuedbook,index)=>renderissuedBooks(issuedbook,index))}
        </div>
    );
}