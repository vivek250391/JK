
import styles from './edit-book.module.css'
import { useRouter } from 'next/navigation'
export function EditBook({id}){
    const router=useRouter()
    if(!id)
        return (
            <div>
                please enter valid id
            </div>
    )

    return (
        <div className={styles.editBook}>
            <div className={styles.book}>
            edit book {id}
            <div className={styles.item}>
                <div>author:</div>
                <div><input type="text" /></div>
            </div>
            <div className={styles.item}>
                <div>genre:</div>
                <div><input type="text" /></div>
            </div>
            <div className={styles.item}>
                <div>title:</div>
                <div><input type="text" /></div>
            </div>
            <button type="button">Update</button>
            <button type="button" onClick={()=>router.push('/book/view')}>Back to books</button>
            </div>
        </div>
    )
}