import { HashLink } from "react-router-hash-link"
import projects from "../projects.json"
import styles from "../styles/Portfolio.module.css"
import { Divider } from "./Divider"

export const Portfolio = () => (
    <section id="portfolio">
        <h1>My Projects</h1>
        <Divider />
        <div className={styles.portfolioItems}>
            {projects.map((project, index) => (
                <HashLink to={`/project/${index}#`} key={index}>
                    <img
                        src={`/images/${project.thumbImage}`}
                        alt={project.name}
                    />
                    <h2 className={styles.projectName}>{project.name}</h2>
                </HashLink>
            ))}
        </div>
    </section>
)
