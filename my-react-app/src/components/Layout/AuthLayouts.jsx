import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkMode";



const AuthLayout = (props)=>{
  const {children, title,  type} = props;
  const {isDarkMode,setIsDarkMode}=useContext(DarkModeContext);
    {console.log(isDarkMode)}
    return(
      <Fragment>
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode ? "bg-slate-950" : ""}`}>
          {/* salah karna lupa spaci di ${} sat */}
        <div className="flex gap-x-3" >
          <div className="w-full max-w-xs">
            <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded " onClick={() => setIsDarkMode(!isDarkMode)} >
              {isDarkMode ? "light" : "dark"}
            </button>
            <h1 className="text-3xl font-bold mb-2 text-red-600">{title}</h1>
            <p className="font-medium text-slate-600">anjay mabar gass</p>
            {children}
            <Navigation type={type}/>
            {/* === adalah ternary */}
            {/* ? adalah maka */}
            {/* && adalah dan */}
          </div>
        </div> 
      </div>
      </Fragment>
    )}

    

  

const Navigation = ({type}) =>{
  if(type==="login"){
    return(
      <p className="text-sm mt-5 text-center">
        don't have account? {" "}
        <Link to="/register" className="font-bold text-red-600">sign up</Link>
      </p>
    );
  }else{
    return(
      <p className="text-sm mt-5 text-center">
        have an account? {" "}
        <Link to="/login" className="font-bold text-red-600">login</Link>
      </p>
    );
  }

}
export default AuthLayout;