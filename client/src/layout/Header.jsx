import { FaGithub } from "react-icons/fa";

export const Header = () => {
    return (
        <header className="grid grid-cols-[1fr_auto] py-4 px-20 items-center border-b-1 border-b-zinc-800">
                <h1 className="text-3xl bg-custom-gradient">INDIC</h1>
            <nav className="flex">
                <ul className="flex text-zinc-400 gap-10 items-center">
                    <li className="hidden sm:block">
                        <a href="https://indic-blueprints.vercel.app" target="blank">Plantillas de texto</a>
                    </li>
                    <li className="hidden sm:block">
                        <a href="https://indic-blueprints.vercel.app/comentaris" target="blank">Comentarios tipo</a>
                    </li>
                    <li className="text-xl">
                        <a href="https://github.com/arcvra" target="blank">
                            <FaGithub className="fill-zinc-300" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}