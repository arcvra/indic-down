interface ButtonProps {
    ariaLabel: string,
    type?: "button" | "submit" | "reset",
    onClick: () => void,
    className: string,
    name: string,
    children: string
}

export function Button({
    ariaLabel,
    type = "button",
    onClick,
    className = "",
    name,
    children }: ButtonProps) {
    return (
        <button
            aria-label={ariaLabel}
            type={type}
            name={name}
            className={`${className} px-2 py-3`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}