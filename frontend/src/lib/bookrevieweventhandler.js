export async function isbookIssuedToUser(userId,bookissueId){
    let data={}
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${userId}/${bookissueId}/isbookissued`,{
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

export async function validate(bookId,review,userId,setError,setSuccess){

    if(review.length===0){
        setError("review cannot be empty")
        return
    }
    addReview(bookId,review,userId,setError,setSuccess)

}

 async function addReview(bookId,review,userId,setError,setSuccess){
    setError('')
   setSuccess('')
    let data={}
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${bookId}/review`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({review:review,userId:userId})
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