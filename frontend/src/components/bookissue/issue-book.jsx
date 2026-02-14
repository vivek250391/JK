import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Styles from '@/components/bookissue/issue-book.module.css'
import { getBookById } from '@/lib/viewbookeventhandler'
import { issueBook } from '@/lib/bookissuehandler'
import { getuserbyname } from '@/lib/auth/signupeventhandler'

export function IssueBook({id}){
    const [book,setBook]=useState({})
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const [users,setUsers]=useState([])
    const [userInput,setUserInput]=useState('')
    const [userId,setUserId]=useState('')
    const router=useRouter()


    useEffect(()=>{
        async function getBookByIdWraper(){
                const data=await getBookById(id)
                setBook(data)
        }
        getBookByIdWraper()
    },[])

    
    return (
        <div  className={Styles.IssueBook}>
        <div className={Styles.book}>
            <div>Issue below book</div>
            <div>book Id {book.id}</div>
            <div>title {book.title}</div>
            <div>author {book.author}</div>
            <div>genre {book.genre}</div>
            <div>select user</div>
            <div><input type="text" placeholder='search user' onChange={(event)=>setUserInput(event.target.value)}/> </div>
            <div><button type="button" onClick={async ()=>{setError('');setSuccess('');const data=await getuserbyname(userInput);setUsers(data);if(data.length>0){setUserId(data[0].id)};console.log(data)}}>search</button></div>
            <div>{users.length>0&&users[0].id+'|'+users[0].username}</div>
            <div className={Styles.error}>{error}</div>
            <div className={Styles.success}>{success}</div>
            <button type="button" onClick={()=>issueBook(userId,book,setError,setSuccess)}>Issue book</button>
            <button type="button" onClick={()=>router.push('/bookissue')}>back</button>
            </div>
        </div>
    )
}