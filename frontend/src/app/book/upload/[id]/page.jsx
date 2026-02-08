'use client'
import { UploadBook } from "@/components/book/upload-book"
import { useParams } from "next/navigation"
export default function UploadBookPage(){
    const params=useParams()
    return (
        <div>
            <UploadBook id={params.id} />
        </div>
    )
}