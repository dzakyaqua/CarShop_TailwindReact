import { Fragment } from "react"
import Button from "../Elements/Buttons/Index";
import useLogin from "../../hooks/useLogin";




const Navbar =({onClick})=>{
    const username = useLogin();
    const token = localStorage.getItem("token");
    return(
        <Fragment>
            <div className="flex justify-end h-10 bg-red-600 text-white items-center px-10">
                {username}
                <Button className="ml-5 bg-black text-white " onClick={onClick}>Log out</Button>
            </div>
                    
        </Fragment>
    )
}

export default Navbar;