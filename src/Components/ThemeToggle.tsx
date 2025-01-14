
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
    return (
        <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="black" />

            <Moon className="swap-off" size={24} />
            <Sun className="swap-on" size={24} />

        </label>
    )
}

export default ThemeToggle