import { IForm } from "../../interfaces/form";

function Form(props?: any) {
    return (
        <form
            method={props.method}
            onSubmit={props.onSubmit}
            >
            {props?.children}
        </form>
    )
};

export { Form };