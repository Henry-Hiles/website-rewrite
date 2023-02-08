import { HashLink } from "react-router-hash-link"
import projects from "../projects.json"
import styles from "../styles/Portfolio.module.css"
import { Divider } from "./Divider"

export const Portfolio = () => (
    <section id="portfolio">
        <h2>My Projects</h2>
        <Divider />
        <article className={styles.portfolioItems}>
            {projects.map((project, index) => (
                <HashLink to={`/project/${index}#`} key={index}>
                    <img
                        src={`/images/${project.thumbImage}`}
                        alt={project.name}
                    />
                    <h3 className={styles.projectName}>{project.name}</h3>
                </HashLink>
            ))}
        </article>
    </section>
)
