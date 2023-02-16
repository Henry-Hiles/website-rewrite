import Linkify from "react-linkify"
import { useParams } from "react-router-dom"
import { ButtonLink } from "../components/ButtonLink"
import { Divider } from "../components/Divider"
import { RoundDivider } from "../components/RoundDivider"
import projects from "../projects.json"
import styles from "../styles/Project.module.css"

export const Project = () => {
    const { id } = useParams()
    const project = projects[id]

    return (
        <div id={styles.container}>
            <section id={styles.jumbo}>
                <h1 className={styles.title}>{project.name}</h1>
                <Divider />
                <p className={styles.overview}>{project.overview}</p>
                <RoundDivider />
            </section>
            <section id={styles.details}>
                <div className={styles.row}>
                    <article className={styles.longDescription}>
                        <h2>Description</h2>
                        <Divider />
                        <Linkify>
                            <p>
                                {project.description} {project.technologies}
                            </p>
                            <div className={styles.buttonRow}>
                                {project.github && (
                                    <ButtonLink href={project.github} newTab>
                                        Source Code
                                    </ButtonLink>
                                )}
                                {project.demoLink && (
                                    <ButtonLink href={project.demoLink} newTab>
                                        Go to demo
                                    </ButtonLink>
                                )}
                            </div>
                        </Linkify>
                    </article>
                    <article className={styles.image}>
                        <img
                            src={`/images/${project.computerImages[0]}`}
                            alt={`Image of ${project.name}`}
                            className={styles.screenshot}
                        />
                    </article>
                </div>
            </section>

            {/* {project.demoLink && (
                <section id={styles.demoLink}>
                    <h2>Live Demo</h2>
                    <Divider />
                    <a
                        href={project.demoLink}
                        // target="_blank"
                        // rel="noreferrer"
                        className={styles.computer}
                    >
                        <img
                            src={`/images/${project.computerImages[0]}`}
                            alt={`Image of ${project.name}`}
                        />
                        <img
                            src="/images/play.png"
                            className={styles.play}
                            alt="Go to demo"
                        />
                    </a>
                </section>
            )} */}
        </div>
    )
}
