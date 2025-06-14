import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Buttons/Index";
import InputForm from "../Elements/Index";
import { login } from "../../services/auth.service";

const FormLogin = () => {
    const[loginFailed,setLoginFailed] = useState("");
    const HandleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        login(data,(status,res)=>{
            if(status){
                localStorage.setItem('token',res); 
                // menyimpan token ke localstorage
                window.location.href = '/Products';
            }else{
                setLoginFailed(res.response.data);
                console.log(res.response.data);
                // menampilkan error pada console dan mengambil error yang bisa di cek
            }
        });
    };

    const usernameRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        usernameRef.current.focus();
    }, []);   

    return (
        <form onSubmit={HandleLogin}>
            
            <InputForm label="username" type="text" placeholder="example@gmail.com" name="username" ref={usernameRef} />
            <InputForm label="Password" type="password" placeholder="*******" name="password" ref={passwordRef}/>
            <Button className="bg-red-600 w-auto" type="submit">
                Login
            </Button>
            {loginFailed&&<p className="text-red-600 text-center mt-5">{loginFailed }</p>}
        </form>
    );
};

export default FormLogin;
