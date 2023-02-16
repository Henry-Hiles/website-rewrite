import { useState, useEffect } from "react"

export const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))

        return () => {
            window.removeEventListener("resize", () =>
                setWidth(window.innerWidth)
            )
        }
    })

    return width
}
