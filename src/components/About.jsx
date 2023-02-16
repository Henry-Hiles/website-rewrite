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
                    Hello, my name is Henry Hiles, Full Stack Developer. I have
                    extensive experience with React, SolidJS, Node.js, and
                    ASP.NET Razor Pages. I have used my Node.js knowledge to
                    create{" "}
                    <a
                        href="https://github.com/Henry-Hiles/QuadraticBot2.0"
                        target="_blank"
                        rel="noreferrer"
                    >
                        QuadraticBot 2.0
                    </a>
                    , a giveaway bot for discord.
                </p>
                <p>
                    For more projects, check out{" "}
                    <a
                        href="https://github.com/Henry-Hiles"
                        target="_blank"
                        rel="noreferrer"
                    >
                        my GitHub profile.
                    </a>
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
