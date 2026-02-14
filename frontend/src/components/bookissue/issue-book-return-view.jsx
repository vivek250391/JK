'use client'

import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

import {BooktoReturn,ReturnBook} from '@/lib/bookissuehandler'
import Styles from '@/components/bookissue/issue-book-return-view.module.css'

export function ReturnBookView(){
    const [issuedBooks,setIssueBooks]=useState([])
    const router=useRouter()

    useEffect(()=>{
        async function wrapper(){
            const data=await BooktoReturn()
            setIssueBooks(data)
            console.log(data)
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
                <div><button type="button" onClick={async ()=>await ReturnBook(issuedbook.id,router)}>Return book</button></div>
            </div>
        )
    }

    return (
        <div className={Styles.returnBooks}>
            {issuedBooks.map((issuedbook,index)=>renderissuedBooks(issuedbook,index))}
        </div>
    );
}