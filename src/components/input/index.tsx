import { ChangeEvent, useState } from "react";

interface IInputProps {
    id: string;
    type: string;
    value?: string;
    onChange?: (value?: string) => any;
}

function Input(props: IInputProps) {

    const [value, setValue]  = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (props.onChange) {
            props.onChange(newValue)
        }
    };

    return (
        <input
            type={props.type}
            value={value}
            onChange={handleChange}
            id={props.id}
        >
        </input>
    )
};

export { Input };