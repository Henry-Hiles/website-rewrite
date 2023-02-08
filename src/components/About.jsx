import styles from "../styles/About.module.css"
import { Divider } from "./Divider"

export const About = ({ lightTheme }) => (
    <section className={styles.about} id="about">
        <h2>About</h2>
        <Divider />
        <div className={styles.row}>
            <article>
                <img
                    src={`https://raw.githubusercontent.com/Henry-Hiles/github-stats/master/generated/overview.svg${
                        lightTheme
                            ? "#gh-light-mode-only"
                            : "#gh-dark-mode-only"
                    }`}
                    alt="My Github Stats"
                />
            </article>
            <article className={styles.textArticle}>
                <p>
                    Hello, my name is Henry Hiles, Full Stack Developer with
                    React SolidJS, and Razorpages experience. I am also
                    experienced with node.js, which I have created a Discord bot
                    with,{" "}
                    <a
                        href="https://github.com/Henry-Hiles/QuadraticBot2.0"
                        target="_blank"
                        rel="noreferrer"
                    >
                        QuadraticBot 2.0
                    </a>
                    .
                </p>
                <p>
                    Check out{" "}
                    <a
                        href="https://github.com/Henry-Hiles"
                        target="_blank"
                        rel="noreferrer"
                    >
                        my GitHub profile
                    </a>{" "}
                    to see all of my projects.
                </p>
            </article>
            <article>
                <img
                    src={`https://raw.githubusercontent.com/Henry-Hiles/github-stats/master/generated/languages.svg${
                        lightTheme
                            ? "#gh-light-mode-only"
                            : "#gh-dark-mode-only"
                    }`}
                    alt="My Github Stats"
                />
            </article>
        </div>
    </section>
)
