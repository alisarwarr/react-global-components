interface GlobalButtonProp {
    type: 'button' | 'submit';
    text: string;
    onClick: () => void;
}

export default function GlobalButton({
    type,
    text,
    onClick
}: GlobalButtonProp) {
    return (
        <button
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
}