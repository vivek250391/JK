export async function getBooks(){
    let data;
    const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`)
    if(res.status===200){
        data=res.json()
        return data
    }
        
    else{
        alert(res.status)
    }
        
}