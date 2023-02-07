import Linkify from "react-linkify"
import { useParams } from "react-router-dom"
import { Divider } from "../components/Divider"
import { RoundDivider } from "../components/RoundDivider"
import projects from "../projects.json"
import styles from "../styles/Project.module.css"

export const Project = () => {
    const { id } = useParams()
    const project = projects[id]

    return (
        <div id={styles.container}>
            <section>
                <h1>{project.name}</h1>
                <Divider />
                <p className={styles.overview}>{project.overview}</p>
                <RoundDivider />
            </section>
            <section id={styles.details}>
                <div className={styles.row}>
                    <div className={styles.longDescription}>
                        <h2>Description</h2>
                        <Divider />
                        <Linkify>
                            <p>
                                {project.description} {project.technologies}{" "}
                                {project.github && (
                                    <>
                                        This projects source code is located
                                        here:{" "}
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {project.name}'s Github
                                        </a>
                                        .
                                    </>
                                )}
                            </p>
                        </Linkify>
                    </div>
                    <div className={styles.screenshots}>
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.computer}
                        >
                            <img
                                src={`/images/${project.computerImages[0]}`}
                                alt={`Image of ${project.name}`}
                            />
                        </a>
                    </div>
                </div>
                {project.demoLink && <RoundDivider />}
            </section>

            {project.demoLink && (
                <section id={styles.demoLink}>
                    <h1>Live Demo</h1>
                    <Divider />
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
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
            )}
        </div>
    )
}
