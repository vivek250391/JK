import styles from '@/components/book/upload-book.module.css'
import {validateFileType,sendData} from '@/lib/uploadbookeventhandler'
import { useState,useRef } from 'react'
export function UploadBook({id}){
    const [error,setError]=useState("")
    const [fileExtension,setFileExtension]=useState("")
    const [success,setSuccess]=useState("")
    const fileInputRef = useRef(null);
    return (
        <div className={styles.uploadBook}>
            <div className={styles.book}>
            upload book for id: {id}
            <div>
                <input type="file" accept='.pdf' ref={fileInputRef}  onChange={(e)=>validateFileType(e,setFileExtension,setError)} />
            </div>
            <div className={styles.error}>
                {error}
            </div>
            <div className={styles.success}>
                {success}
            </div>
            <div>
                <button type="button" onClick={()=>sendData(id,setError,setSuccess,fileExtension,fileInputRef)} >Submit</button>
            </div>
            </div>
        </div>
    )
}