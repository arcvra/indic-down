/**
 * Botón genérico reutilizable
 * 
 * @param {Object} props
 * @param {string} props.ariaLabel - Etiqueta aria para accesibilidad
 * @param {string} [props.type] - Comportamiento del botón - "button" de forma predeterminada
 * @param {() => void} props.onClick - Función que se ejecuta al hacer click
 * @param {string} [props.className] - Clases personalizadas y estilos
 * @param {string} [props.name] - Nombre del botón
 * @param {string} [props.id] - Id del botón
 * @param {string} props.title - Texto visible del botón
 * @returns {JSX.Element}
 */
export function Button({
    ariaLabel,
    type = "button",
    onClick,
    className = " ",
    name,
    id,
    title }) {
    return (
        <button
            aria-label={ariaLabel}
            type={type}
            onClick={onClick}
            className={`${className} px-2 py-3`}
            name={name}
            id={id}
        >
            {title}
        </button >
    )
}