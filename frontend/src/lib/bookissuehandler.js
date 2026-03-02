export async function issueBook(userid,book,setError,setSuccess){
   setError('')
   setSuccess('')
    let data={}
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${book.id}/borrow`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "authorization":`bearer ${localStorage.getItem("Token")}`
        },
        body:JSON.stringify({userId:userid})
    })
    if(response.status===200)
    {
        data=await response.json()
        setSuccess("Data saved successfully")
    }
    else
    {
        setError(response.status)
    }
    

}

export async function BooktoReturn(){
   
    let data={}
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/return`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "authorization":`bearer ${localStorage.getItem("Token")}`
        },
    })
    
    if(response.status===200)
    {
        data=await response.json()
        return {data:data,error:""}
       
    }
    else
    {
        return {data:{},error:response.statusText}
    }
    

}

export async function ReturnBook(bookissueId,router,setError){
   
    let data={}
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${bookissueId}/return`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "authorization":`bearer ${localStorage.getItem("Token")}`
        },
        body:JSON.stringify({})
    })
    
    if(response.status===200)
    {
        data=await response.json()
        if(data.success)
            router.push('/bookissue')
    }
    else
    {
        setError(response.statusText)
    }
}

