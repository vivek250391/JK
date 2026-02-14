'use client'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/components/book/view-book.module.css'
import { getBooks } from '@/lib/viewbookeventhandler'
export function ViewBook(){
    const router=useRouter()
    const [book,setBook]=useState([])
    useEffect(()=>{
        async function asynccall(){
            const data=await getBooks()
            setBook(data)
        }
        asynccall()
    },[])

    function renderBook(entry,index){
        return (
            <div key={index} className={styles.book}>
                <div>Title:{entry.title}</div>
                <div>Genre:{entry.genre}</div>
                <div>Author:{entry.author}</div>
                <button className={styles.button} type="button" onClick={()=>router.push(`/book/update/${entry.id}`)}>Edit</button>
                <button className={styles.button} type="button" onClick={()=>router.push(`/book/upload/${entry.id}`)}>Edit book content</button>
            </div>
        )
    }

    return (
       <div className={styles.viewBooks}>
        {book.map((entry,index)=>renderBook(entry,index))}
            
        
       </div> 
    )
}