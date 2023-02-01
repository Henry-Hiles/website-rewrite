import styles from "../styles/About.module.css"

export const About = () => (
    <section id={styles.about}>
        <h1>About</h1>
        <hr />
        <p>
            Hello, my name is Henry Hiles, Full Stack Developer with React
            SolidJS, and Razorpages experience. I am also experienced with
            node.js, which I have a Discord bot with,{" "}
            <a
                href="https://github.com/Henry-Hiles/QuadraticB ot2.0"
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
    </section>
)
