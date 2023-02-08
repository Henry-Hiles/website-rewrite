import styles from "../styles/Divider.module.css"
import { FaStar } from "react-icons/fa"

export const Divider = () => (
    <div className={styles.container}>
        <span className={styles.dividerIcon}>
            <FaStar />
        </span>
    </div>
)
