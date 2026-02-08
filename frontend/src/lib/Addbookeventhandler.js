export async function validatebook(book,setError,setSuccess){
    setError("")
    setSuccess("")
    if(book.author===""){
        setError("Author name is empty")
        return
    }
    if(book.genre===""){
        setError("Genre is empty")
        return
    }
    if(book.title===""){
        setError("title is empty")
        return
    }
    await addbook(book,setError,setSuccess)    
}

async function addbook(book,setError,setSuccess){
    let data={}
    console.log(process.env.NEXT_PUBLIC_API_URL)
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({title:book.title,author:book.author,genre:book.genre})
    })
    
    if(response.status===200)
    {
        data=await response.json()
        console.log(data.success)
        setSuccess("Data saved successfully.please add actual book")
    }
    else
    {
        setError(response.status)
    }
    
}