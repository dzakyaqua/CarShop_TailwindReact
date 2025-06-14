import { forwardRef } from "react";
import Input  from "./Input";
import Label from "./Label";

const InputForm = forwardRef(({label, name, type, placeholder ,...props},ref) =>{

        return(
            <div className="mb-6">
                <Label htmlFor={name} >{label}</Label>
                <Input name={name} placeholder={placeholder} type={type} ref={ref}{...props}></Input>
            </div>
        );
    }
)

export default InputForm;