import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function Paragraph() {
    const context = useContext(ThemeContext)

    return (
        <span className={context.theme}>Day la doan van</span>
    )
}

export default Paragraph;