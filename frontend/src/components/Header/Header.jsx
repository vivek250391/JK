import styles from '@/components/Header/Header.module.css'
export function Header({heading}){
    return (
        <div className={styles.header}>
           <div className={styles.logo}>Logo</div>
           <div className={styles.text}>{process.env.SITE_HEADER}</div> 
           <div className={styles.profile}>profile</div>
        </div>
    )
}