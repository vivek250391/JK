'use client'
import Styles from '@/components/auth/Signup.module.css'
import {setUsername,setConfirmPassword,setPassword,setEmail,Validate} from '@/lib/auth/signupeventhandler'
import { useState } from 'react';
export function SignUp(){
    const [signupForm,setSignupForm]=useState({username:'',password:'',confirmPassword:'',email:''}) 
    const [error,setError]=useState('')
    const [success,setSuccees]=useState('')
    return (
       <div className={Styles.Login}>
            <div className={Styles.Header}>Login</div>
            <div>
                <input type="text" size="40" placeholder="username" onChange={(event)=>setUsername(event,signupForm,setSignupForm)} />
            </div>
            <div>
                <input type="password" size="40" placeholder="password" onChange={(event)=>setPassword(event,signupForm,setSignupForm)} />
            </div>
            <div>
                <input type="password" size="40" placeholder="confirm password" onChange={(event)=>setConfirmPassword(event,signupForm,setSignupForm)} />
            </div>
            <div>
                <input type="text" size="40" placeholder="email" onChange={(event)=>setEmail(event,signupForm,setSignupForm)} />
            </div>
            <div className={Styles.error}>
                {error}
            </div>
            <div className={Styles.success}>
                {success}
            </div>
            <div>
                <button type="button" onClick={()=>Validate(signupForm,setError,setSuccees)}>sign Up</button>
            </div>
            
        </div>
    );
}