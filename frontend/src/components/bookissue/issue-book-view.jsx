'use client'
import Styles from '@/components/bookissue/issue-book-view.module.css'
import { useState,useEffect } from 'react'
import {useRouter} from 'next/navigation'
import { getBooks } from '@/lib/viewbookeventhandler'
export function IssueBookView(){
       const router=useRouter()
        const [books,setBooks]=useState([])
        const [error,setError]=useState("")
        useEffect(()=>{
            async function asynccallBooks(){
                const data=await getBooks()
                if(data.error.length>0)
                    setError(data.error)
                else
                    setBooks(data.data)
            }
            asynccallBooks()
        },[])

    function renderBooks(book,index){
        return (
            <div className={Styles.book} key={book.id}>
            <div>{book.id}</div>
            <div>{book.title}</div>
            <button type="button" onClick={()=>router.push(`/bookissue/issue/${book.id}`)}>issue</button>
            </div>
        )
    }

    return (
        <div className={Styles.IssueBooks}>
            <button type="button" onClick={()=>router.push('/bookissue/return')}>Return Book</button>
            <button type="button" onClick={()=>router.push('/book/view')}>Book operations</button>
            {error.length>0&&<div>{error}</div>}
           {books.map((book,index)=>renderBooks(book,index))} 
        </div>
    )
}