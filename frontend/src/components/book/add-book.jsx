'use client'
import { useState } from 'react'
import { validatebook } from '@/lib/Addbookeventhandler'
import styles from '@/components/book/add-book.module.css'
export function AddBook(){
    const [book,setbook]=useState({author:'',genre:'',title:''})
    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");
    return (
         <div className={styles.addBook}>
            <div className={styles.book}>
            <div className={styles.item}>
                <div>author:</div>
                <div><input type="text" onChange={(e)=>setbook({...book,author:e.target.value})} /></div>
            </div>
            <div className={styles.item}>
                <div>genre:</div>
                <div><input type="text" onChange={(e)=>setbook({...book,genre:e.target.value})} /></div>
            </div>
            <div className={styles.item}>
                <div>title:</div>
                <div><input type="text"  onChange={(e)=>setbook({...book,title:e.target.value})}/></div>
            </div>
            <div className={styles.error}>{error}</div>
            <div className={styles.success}>{success}</div>
            
            {success&&<div><button type="button">Add book content</button></div>}
            <button type="button" onClick={()=>validatebook(book,setError,setSuccess)}>Add</button>
            </div>
        </div>
    )
}