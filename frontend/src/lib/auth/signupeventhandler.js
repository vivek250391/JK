export function setUsername(event,signupForm,setSignupForm){
    setSignupForm({...signupForm,username:event.target.value})
}

export function setPassword(event,signupForm,setSignupForm){
    setSignupForm({...signupForm,password:event.target.value})
}

export function setConfirmPassword(event,signupForm,setSignupForm){
    setSignupForm({...signupForm,confirmPassword:event.target.value})
}

export function setEmail(event,signupForm,setSignupForm){
    setSignupForm({...signupForm,email:event.target.value})
}

export async function Validate(signupForm,setError,setSuccess){
    setError('')
    setSuccess('')
    if (signupForm.username===''){
            setError('login is empty')
            return;
    }
    if (signupForm.email===''){
            setError('email is empty')
            return;
    }
    if (signupForm.password===''){
            setError('password is empty')
            return;
    }
    if (signupForm.confirmPassword===''){
            setError('confirm password is empty')
            return;
    }
    if(signupForm.password!==signupForm.confirmPassword){
        setError('confirm password and password is not same')
        return;
    }
    addlogin(signupForm,setError,setSuccess)
}

async function addlogin(signupForm,setError,setSuccess){
    let data={}
    console.log(process.env.NEXT_PUBLIC_API_URL)
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({username:signupForm.username,password:signupForm.password,email:signupForm.email})
    })

    if (response.status===200)
        setSuccess("signup done succefully")
    else
        setError(response.status)
}

export async function getuserbyname(username){
    let data={}
    console.log(process.env.NEXT_PUBLIC_API_URL)
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/users/${username}`,{
        method:"POST"
    })

    if (response.status===200)
        return response.json()
    else
        console.log(response.statusText)
}