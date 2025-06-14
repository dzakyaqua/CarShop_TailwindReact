
const Label = ({htmlFor,children,ref,...props}) =>{

    return(
    <label
        htmlFor={htmlFor}
        className="block text-slate-600 text-sm font-bold mb-2"
        >
        {children}
        {/* children adalah properti yang berisi data yang di inputkan di dalam tag <Label> */}
    </label>
    )
}

export default Label;