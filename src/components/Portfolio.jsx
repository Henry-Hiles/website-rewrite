import styles from "../styles/Portfolio.module.css"

export const Portfolio = () => (
    <section id={styles.portfolio}>
        <h1>My Projects</h1>
        <hr />
        <div className={styles.portfolioItems}>
            <a asp-page="Projects/FlappyBird">
                <img src="images/flappyThumb.jpg" alt="Quadratic Giveaways" />
                <h2>Flappy Bird Online</h2>
            </a>
            <a asp-page="Projects/PokeAPI">
                <img src="images/pokeAPIThumb.png" alt="PokeAPI Searcher" />
                <h2>PokeAPI Searcher</h2>
            </a>
            <a asp-page="Projects/QuadraticBot">
                <img src="images/quadraticBot.png" alt="Quadratic Giveaways" />
                <h2>QuadraticBot 2.0</h2>
            </a>
            <a asp-page="Projects/Messaging">
                <img src="images/messagingThumb.png" alt="Messaging" />
                <h2>Messaging</h2>
            </a>
        </div>
    </section>
)
