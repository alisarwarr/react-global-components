interface GlobalInputProp {
    type: 'text' | 'number' | 'email' | 'password';
    value: string | number;
    setValue: Function;
}

export default function GlobalInput({
    type,
    value,
    setValue
}: GlobalInputProp) {
    return (
        <input
            type={type}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
    )
}