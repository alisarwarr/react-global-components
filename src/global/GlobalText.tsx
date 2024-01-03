interface GlobalTextProp {
    value: string | number;
}

export default function GlobalText({
    value
}: GlobalTextProp) {
    return (
        <p>
            {value}
        </p>
    )
}