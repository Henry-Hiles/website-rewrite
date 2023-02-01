import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Jumbo } from "../components/Jumbo"
import { Portfolio } from "../components/Portfolio"
import styles from "../styles/Home.module.css"

export const Home = () => {
    return (
        <div id={styles.container}>
            <Jumbo />
            <Portfolio />
            <About />
            <Contact />
        </div>
    )
}
