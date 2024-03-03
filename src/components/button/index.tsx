import { IButton } from "../../interfaces/button";

function Button(props?: any) {
    return (
        <button onClick={props.onClick}>
            <span>{props?.text}</span>
        </button>
    )
};

export { Button };