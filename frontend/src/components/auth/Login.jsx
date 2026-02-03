import Styles from "@/components/auth/Login.module.css"
export function Login(){
    return(
        <div className={Styles.Login}>
            <div className={Styles.Header}>Login</div>
            <div>
                <input type="text" size="40" placeholder="username" />
            </div>
            <div>
                <input type="password" size="40" placeholder="password" />
            </div>
            
            
        </div>
    )
}