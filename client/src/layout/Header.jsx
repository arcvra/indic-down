import { FaGithub } from "react-icons/fa";

export const Header = () => {
    return (
        <header>
            <h1><span>is </span>Indic Down <span>?</span></h1>
            <nav>
                <ul>
                    <li>
                        <a href="https://indic-blueprints.vercel.app">Plantillas de texto</a>
                    </li>
                    <li>
                        <a href="https://indic-blueprints.vercel.app/comentaris">Comentarios tipo</a>
                    </li>
                    <li>
                        <a href="https://github.com/arcvra">
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}