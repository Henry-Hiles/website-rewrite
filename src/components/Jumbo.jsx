import { RoundDivider } from "./RoundDivider"
import styles from "../styles/Jumbo.module.css"
import { Divider } from "./Divider"

export const Jumbo = () => (
    <header>
        <section className={styles.jumbo}>
            <h1>
                <img src="images/logo.png" alt="Henry Hiles" />
            </h1>
            <Divider />
            <span>Full Stack .NET Developer & Discord Bot Developer</span>
            <RoundDivider />
        </section>
    </header>
)
