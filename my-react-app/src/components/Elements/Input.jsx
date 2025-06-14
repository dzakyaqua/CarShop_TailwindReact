import { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder, name, ...props }, ref) => {
    return (
        <input 
            className="text-sm border rounded-full py-2 px-3 text-slate-700" 
            placeholder={placeholder}
            name={name}
            type={type} 
            id={name}
            // id berguna untuk membuat saat label di klik akan langsung menunjukan prompt yang harus diisi
            ref={ref}
            {...props}
        />
    );
});

export default Input;