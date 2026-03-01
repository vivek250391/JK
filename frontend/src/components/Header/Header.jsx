'use client'
import styles from '@/components/Header/Header.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
export function Header({heading}){
    const [isuserloggedin,setIsUserLoggedin]=useState(localStorage.getItem("userloggedin"))
    const router=useRouter()
    
   

    useEffect(()=>{
         if(localStorage.getItem("userloggedin")!==setIsUserLoggedin)
            setIsUserLoggedin(localStorage.getItem("userloggedin"))
    },[isuserloggedin])

    function renderlogout(){
        if(isuserloggedin==="true")
            return (
        <div className={styles.logout} onClick={()=>{setIsUserLoggedin("false");router.push('/auth/signout')}}>Logout</div>
        )
    }
   

    return (
        <div className={styles.header}>
           <div className={styles.logo}>Logo</div>
           <div className={styles.text}>{process.env.NEXT_PUBLIC_SITE_HEADER}</div> 
           {isuserloggedin==="true"&&<div className={styles.profile} onClick={()=>router.push('/auth/profile')}>profile</div>}
           {renderlogout()}
        </div>
    )
}