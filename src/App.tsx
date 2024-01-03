//REACT
import { useState } from "react";
//COMPONENT
import GlobalInput from "./global/GlobalInput";
import GlobalButton from "./global/GlobalButton";
import GlobalSelect from "./global/GlobalSelect";
import GlobalText from "./global/GlobalText";


export default function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [selectedValue, setSelectedValue] = useState("Ali");


    return (
        <>

            <GlobalInput
                type="text"
                value={name}
                setValue={setName}
            />

            <GlobalButton
                type="button"
                text="Click"
                onClick={() => alert("Name : " + name)}
            />

            <GlobalText
                value={name}
            />

            <br />

            <GlobalInput
                type="number"
                value={age}
                setValue={setAge}
            />

            <GlobalButton
                type="button"
                text="Click"
                onClick={() => alert("Age : " + age)}
            />

            <GlobalText
                value={age}
            />

            <br />

            <GlobalSelect
                list={["Ali", "Faiz", "Salman"]}
                onChange={setSelectedValue}
            />

            <GlobalButton
                type="button"
                text="Click"
                onClick={() => alert("Selected Value : " + selectedValue)}
            />

            <GlobalText
                value={selectedValue}
            />

        </>
    )
}