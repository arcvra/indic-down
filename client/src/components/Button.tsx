interface ButtonProps {
    ariaLabel: string,
    type?: "button" | "submit" | "reset",
    onClick: () => void,
    className: string,
    name: string,
    children: string,
    disabled: boolean
}

export function Button({
    ariaLabel,
    type = "button",
    onClick,
    className = "",
    name,
    children,
    disabled
}: ButtonProps) {
    return (
        <button
            aria-label={ariaLabel}
            type={type}
            name={name}
            className={`${className} px-2 py-3`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}