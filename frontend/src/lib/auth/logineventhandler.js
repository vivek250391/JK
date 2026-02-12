export function setUsername(userForm,setUserForm,event){
    setUserForm({...userForm,username:event.target.value})
}

export function setPassword(userForm,setUserForm,event){
    setUserForm({...userForm,password:event.target.value})
}

export async function Login(userForm,setError,setSuccess)
{
    setError('')
    setSuccess('')
    if(userForm.username===''){
        setError('username is empty')
        return
    }
        
    if(userForm.password===''){
        setError('password is empty')
        return
    }
    await login(userForm,setError,setSuccess)
}

async function login(userForm,setError,setSuccess){
    let data={}
    console.log(process.env.NEXT_PUBLIC_API_URL)
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/Login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({username:userForm.username,password:userForm.password})
    })

    if(response.status==200){
        data=await response.json()
        if(data.error)
            setError(data.error)
        else if(data.Token){
            setSuccess("logged in")
            localStorage.setItem("Token",data.Token)
        }
            
    }
    else 
        setError(response.status)
}