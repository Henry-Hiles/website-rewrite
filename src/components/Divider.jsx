import styles from "../styles/Divider.module.css"
import { FaStar } from "react-icons/fa"

export const Divider = () => (
    <div className={styles.container}>
        <div className={styles.dividerIcon}>
            <FaStar />
        </div>
    </div>
)
