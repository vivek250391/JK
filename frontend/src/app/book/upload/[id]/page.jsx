'use client'
import { useParams } from "next/navigation"
export default function UploadBook(){
    const params=useParams()
    return (
        <div>
            upload book for id {params.id}
        </div>
    )
}