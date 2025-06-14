const Button = ({ children, className = "bg-black",onClick=()=>{}, type = "button",...props }) => {
    return (
<button 
    className={`h-10 px-6 font-semibold rounded-md text-white ${className}`} 
    {...props}
    type={type}
    onClick={onClick} // Gunakan onMouseDown daripada onClick
>
    {children}
</button>
    )
};

export default Button;
