
import styles from './edit-book.module.css'
export function EditBook({id}){
    
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
            </div>
        </div>
    )
}