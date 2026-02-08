export function validateFileType(event,setFileExtension,setError){
    setError("")
    setFileExtension("")
    const file=event.target.value
    const ext=file.split('.').pop()
    if(ext!=="pdf")
        setError("Only pdf files allowed")
    setFileExtension(ext)
    

}

export async function sendData(id,setError,setSuccess,fileExtension,fileInputRef){
    if(fileExtension!=="pdf")
        return
    const file = fileInputRef.current?.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file)

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload/${id}`, {
      method: 'POST', // or 'PUT'
      body: formData 
      // Do NOT manually set the 'Content-Type' header when using FormData.
      // The browser sets it automatically with the correct boundary.
    });

    if(response.status===200)
        setSuccess("file is successfully uploaded")
    else
        setError(response.status)

}