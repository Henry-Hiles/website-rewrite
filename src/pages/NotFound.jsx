import styles from "../styles/NotFound.module.css"
import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h1 id={styles.header}>Page not found.</h1>
            <span id={styles.description}>
                We couldn't find that page. Please{" "}
                <a onClick={() => window.history.go(-1)} href="#">
                    go back
                </a>
                , or return to our <Link to="/">home page</Link>.
            </span>
        </div>
    )
}
