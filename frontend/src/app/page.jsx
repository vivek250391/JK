'use client'
import { Header } from "@/components/Header/Header";
import { useRouter } from "next/navigation";
export default function Home() {
  const router=useRouter()
  return (
    <div>
      Home page
      <div><button type="button" onClick={()=>router.push("/book/view")}>Manage Books</button></div>
       <div><button type="button" onClick={()=>router.push("/bookissue")}>Manage issued Books</button></div>
    </div>
  );
}
