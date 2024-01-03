interface GlobalSelectProp {
    list: string[];
    onChange: Function;
}

export default function GlobalSelect({
    list,
    onChange
}: GlobalSelectProp) {
    return (
        <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
        >
            {
                list.map((text: string, index: number) => (
                    <option key={index} value={text}> {text} </option>
                ))
            }
        </select>
    )
}