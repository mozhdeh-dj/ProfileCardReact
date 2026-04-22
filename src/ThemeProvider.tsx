import { useState, useEffect } from "react"
import ThemeContext from "././ThemeContext"

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme")
        return saved ? saved : "light"
    })


    useEffect(() => {
        document.body.classList.remove("light", "dark")
        document.body.classList.add(theme)

        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
