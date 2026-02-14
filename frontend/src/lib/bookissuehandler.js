export async function issueBook(userid,book,setError,setSuccess){
   setError('')
   setSuccess('')
    let data={}
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${book.id}/borrow`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
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
    })
    
    if(response.status===200)
    {
        data=await response.json()
        return data
       
    }
    else
    {
        console.log(response.status)
    }
    

}

export async function ReturnBook(bookissueId,router){
   
    let data={}
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${bookissueId}/return`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({})
    })
    
    if(response.status===200)
    {
        data=await response.json()
        if(data.success)
            router.push('/bookissue/return')
    }
    else
    {
        alert(response.status)
    }
}

