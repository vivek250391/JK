export async function validate(id,book,setError,setSuccess){
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
    updateBook(id,book,setError,setSuccess)
}

async function updateBook(id,book,setError,setSuccess){
    let data={}
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "authorization":`bearer ${localStorage.getItem("Token")}`
        },
        body:JSON.stringify({title:book.title,author:book.author,genre:book.genre})
    })
    
    if(response.status===200)
    {
        data=await response.json()
        setSuccess("Data updated successfully")
    }
    else
    {
        setError(response.statusText)
    }
}