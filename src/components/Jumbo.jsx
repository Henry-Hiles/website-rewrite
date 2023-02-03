import { RoundDivider } from "./RoundDivider"
import styles from "../styles/Jumbo.module.css"
import { Divider } from "./Divider"

export const Jumbo = () => (
    <section className={styles.jumbo}>
        <img src="images/logo.png" alt="Henry Hiles" />
        <Divider />
        <span>Full Stack .NET Developer & Discord Bot Developer</span>
        <RoundDivider />
    </section>
)
