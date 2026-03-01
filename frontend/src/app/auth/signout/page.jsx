'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Styles from '@/app/auth/signout/page.module.css'
export default function Signout(){
    const router=useRouter()
    useEffect(()=>{
        localStorage.removeItem("Token")
        localStorage.setItem("userloggedin",false)
    },[])
    return (
        <div className={Styles.center}>
            <div className={Styles.aligncenter}>
            you have been signed out
            <div>
                <button className={Styles.loginbutton} type="button" onClick={()=>router.push('/auth/login')}>login again</button>
            </div>
            </div>
        </div>
    )
}