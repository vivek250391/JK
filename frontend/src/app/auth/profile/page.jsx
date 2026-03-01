'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
export default function ProfilePage(){
    const router=useRouter()
    useEffect(()=>{
        const isuserloggedin=localStorage.getItem("userloggedin")
        if(isuserloggedin==="false")
            router.push('/auth/login')
    },[])
    return (
        <div>
            Profile page
            username,email,first name,last name, address
        </div>
    )
}