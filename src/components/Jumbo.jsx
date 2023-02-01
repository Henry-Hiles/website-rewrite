import { RoundDivider } from "./RoundDivider"
import styles from "../styles/Jumbo.module.css"

export const Jumbo = () => (
    <section id={styles.jumbo}>
        <img src="images/logo.png" alt="Henry Hiles" />
        <p>Full Stack .NET Developer & Discord Bot Developer</p>
        <RoundDivider />
    </section>
)
