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
                        <p>{project.description}</p>
                        <p>{project.technologies}</p>
                    </div>
                    <div className={styles.screenshots}>
                        {project.computerImages.map((imageUrl, index) => (
                            <div className={styles.computer} key={index}>
                                <img
                                    src={`/images/${imageUrl}`}
                                    alt={`Image of ${project.name}`}
                                />
                            </div>
                        ))}

                        {/* <div className={styles.mobile}>
                            <img
                                src={`/images/${project.mobileImage}`}
                                alt={`Image of ${project.name}`}
                            />
                        </div> */}
                    </div>
                </div>
                <RoundDivider />
            </section>

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
                        alt="Image of Messaging Project"
                    />
                    <img
                        src="/images/play.png"
                        className={styles.play}
                        alt="Go to PokeAPI Searcher Demo"
                    />
                </a>
            </section>
        </div>
    )
}
