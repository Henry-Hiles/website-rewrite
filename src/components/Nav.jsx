import { useState, useEffect } from "react"
import { AiFillGithub } from "react-icons/ai"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import styles from "../styles/Nav.module.css"

export const Nav = () => {
    const [y, setY] = useState(window.scrollY)

    useEffect(() => {
        window.addEventListener("scroll", () => setY(window.scrollY))

        return () => {
            window.removeEventListener("scroll", () => setY(window.scrollY))
        }
    }, [y])

    return (
        <nav className={y == 0 ? "" : styles.navbarShrink}>
            <Link to="/">
                <img src="images/logo.png" alt="Henry Hiles" />
            </Link>
            <ul id={styles.links}>
                <li>
                    <HashLink to="/#">Home</HashLink>
                </li>
                <li>
                    <HashLink to="/#portfolio">My Projects</HashLink>
                </li>
                <li>
                    <HashLink to="/#about">About Me</HashLink>
                </li>
                <li>
                    <HashLink to="/#contact">Contact</HashLink>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Henry-Hiles"
                    >
                        <AiFillGithub />
                    </a>
                </li>
            </ul>
        </nav>
    )
}
