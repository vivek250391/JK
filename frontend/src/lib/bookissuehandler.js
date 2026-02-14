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

