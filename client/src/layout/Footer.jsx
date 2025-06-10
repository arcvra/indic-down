import { FaHeart } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="grid grid-cols-2 text-xs items-center justify-center text-zinc-800 px-8 py-3 gap-5 md:text-sm">
            <p className="justify-self-center">Renato R. Vergara 2025</p>
            <p className="justify-self-center">Made by <span><a href="https://github.com/arcvra" target="blank" className="text-zinc-500">@arcvra</a></span> with <span><FaHeart className="fill-red-600 inline" /></span></p>
        </footer>
    )
}