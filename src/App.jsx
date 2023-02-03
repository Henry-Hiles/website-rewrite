import { useState } from "react"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Nav } from "./components/Nav"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Project } from "./pages/Project"
import styles from "./styles/App.module.css"

export const App = () => {
    const [lightTheme, setLightTheme] = useState(
        window.matchMedia("(prefers-color-scheme: light)").matches
    )

    return (
        <div className={`${styles.app} ${lightTheme ? styles.light : ""}`}>
            <Nav lightTheme={lightTheme} setLightTheme={setLightTheme} />
            <Routes>
                <Route index element={<Home />} />
                <Route path="project/:id" element={<Project />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
