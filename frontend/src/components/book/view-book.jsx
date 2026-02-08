'use client'
import styles from '@/components/book/view-book.module.css'
export function ViewBook(){
    return (
       <div className={styles.viewBooks}>
        
            <div className={styles.book}>
                <div>Book Name</div>
                <div>Genre</div>
                <div>Author</div>
                <button className={styles.button} type="button">Edit</button>
            </div>
         
            <div className={styles.book}>
                <div>Book Name</div>
                <div>Genre</div>
                <div>Author</div>
                <button className={styles.button} type="button">Edit</button>
            </div>
        
       </div> 
    )
}