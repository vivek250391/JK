
'use Client'
import { useEffect, useState } from 'react'
import styles from './edit-book.module.css'
import { useRouter } from 'next/navigation'
import { getBookById } from '@/lib/viewbookeventhandler'
import { validate } from '@/lib/updatebookeventhandler'
export function EditBook({id}){
    const router=useRouter()
    const [book,setBook]=useState({})
    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");
    useEffect(()=>{
        async function hydratedata(){
            if(id){
            const data=await getBookById(id)
            setBook(data.data)
        }
        }
        hydratedata()
        

    },[id])
    if(!id)
        return (
            <div>
                please enter valid id
            </div>
    )

    return (
        <div className={styles.editBook}>
            <div className={styles.book}>
            edit book {id}
            <div className={styles.item}>
                <div>author:</div>
                <div><input type="text" value={book.author} onChange={(e)=>setBook({...book,author:e.target.value})} /></div>
            </div>
            <div className={styles.item}>
                <div>genre:</div>
                <div><input type="text" value={book.genre}  onChange={(e)=>setBook({...book,genre:e.target.value})}/></div>
            </div>
            <div className={styles.item}>
                <div>title:</div>
                <div><input type="text" value={book.title} onChange={(e)=>setBook({...book,title:e.target.value})}/></div>
            </div>
            {error.length>0&&<div className={styles.error}>{error}</div>}
            {success.length>0&&<div className={styles.success}>{success}</div>}
            <button type="button" onClick={()=>validate(id,book,setError,setSuccess)}>Update</button>
            <button type="button" onClick={()=>router.push('/book/view')}>Back to books</button>
            </div>
        </div>
    )
}