import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Nav } from "./components/Nav"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Project } from "./pages/Project"
import styles from "./styles/App.module.css"

export const App = () => {
    return (
        <div className={styles.app}>
            <Nav />
            <Routes>
                <Route index element={<Home />} />
                <Route path="project/:projectId" element={<Project />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
