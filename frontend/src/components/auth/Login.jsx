'use client'
import Styles from "@/components/auth/Login.module.css"
import { setUsername,setPassword,Login as loginUser } from "@/lib/auth/logineventhandler"
import { useState } from "react"
export function Login(){
    const [loginForm,setLoginForm]=useState({username:'',password:''})
    const [error,setError]=useState('')
    const [success,setSuccees]=useState('')
    return(
        <div className={Styles.Login}>
            <div className={Styles.Header}>Login</div>
            <div>
                <input type="text" size="40" placeholder="username" onChange={(event)=>setUsername(loginForm,setLoginForm,event)} />
            </div>
            <div>
                <input type="password" size="40" placeholder="password" onChange={(event)=>setPassword(loginForm,setLoginForm,event)} />
            </div>
            <div className={Styles.error}>
                {error}
            </div>
            <div className={Styles.success}>
                {success}
            </div>
            <div>
                <button onClick={()=>loginUser(loginForm,setError,setSuccees)}>Login</button>
            </div>
            
        </div>
    )
}