import { useState } from "react"

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <div>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Dark Mode</button>
        </div>
    )
}

export default DarkMode