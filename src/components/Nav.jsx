import { useState, useEffect } from "react"
import { AiFillGithub } from "react-icons/ai"
import { BsFillMoonFill, BsFillSunFill, BsGithub } from "react-icons/bs"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import styles from "../styles/Nav.module.css"

export const Nav = ({ lightTheme, setLightTheme }) => {
    const [y, setY] = useState(window.scrollY)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))

        return () => {
            window.removeEventListener("resize", () =>
                setWidth(window.innerWidth)
            )
        }
    })

    useEffect(() => {
        window.addEventListener("scroll", () => setY(window.scrollY))

        return () => {
            window.removeEventListener("scroll", () => setY(window.scrollY))
        }
    }, [y])

    return (
        <nav id={styles.nav} className={y == 0 ? "" : styles.navbarShrink}>
            <Link to="/">
                <img src="/images/logo.png" alt="Henry Hiles" />
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
                    <button
                        id={styles.toggleTheme}
                        onClick={() => setLightTheme((theme) => !theme)}
                    >
                        {lightTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
                    </button>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Henry-Hiles"
                    >
                        <BsGithub />
                    </a>
                </li>
            </ul>
        </nav>
    )
}
