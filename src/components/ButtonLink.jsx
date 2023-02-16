import styles from "../styles/ButtonLink.module.css"

export const ButtonLink = ({ children, href, newTab }) => (
    <a
        href={href}
        className={styles.button}
        target={newTab && "_blank"}
        rel={newTab && "noreferrer"}
    >
        {children}
    </a>
)
