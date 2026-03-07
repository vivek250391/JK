

export async function getBooks(){
    let data;
    const token=localStorage.getItem("Token")
    const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`,{
        method:"GET",
        headers:{
        authorization:`bearer ${token}`
    }}
    )
    if(res.status===200){
        data=await res.json()
        return {data:data,error:""}
    }
        
    else{
        return {data:{},error:res.statusText}
    }
        
}

export async function getBookById(bookId){
    let data;
    const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book/${bookId}`,{
        headers:{
            authorization:`bearer ${localStorage.getItem("Token")}`
        }
    })
    if(res.status===200){
        data=await res.json()
        return {data:data,error:""}
    }
        
    else{
        return {data:{},error:res.statusText}
    }
        
}