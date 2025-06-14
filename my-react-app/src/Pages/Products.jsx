import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getproduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "./TableCart";
import { DarkModeContext } from "../context/DarkMode";

const token = localStorage.getItem("token");

const ProductPages =() =>{
    console.log("Token dari localStorage:", token);
    const {isDarkMode,setIsDarkMode}=useContext(DarkModeContext);
    const [products,setProducts]=useState([]);
    const {username}=useLogin();

    useEffect(()=>{
        getproduct((data)=>{
            setProducts(data);
        });
    },[]);

    const HandleLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("password");
        // untuk menghapus data yang ada pada localstorage
        window.location.href="/login";}

    return(
        <Fragment>
            <div className="flex justify-end h-10 bg-red-600 text-white items-center px-10">
                {username}
                <button className="ml-5 px-2 py-1 bg-black text-white rounded" onClick={HandleLogout}>
                    Log out
                </button>
                <button className="ml-5 bg-black px-2 py-1 text-white rounded " onClick={() => setIsDarkMode(!isDarkMode)} >
                    {isDarkMode ? "light" : "dark"}
                </button>
            </div>
            
        <div className={`flex justify-center pt-5 ${isDarkMode ? "bg-slate-950" : ""}`}>
            <div className="3/4 flex flex-wrap justify-center">
            {products.length>0 &&
             products.map((product)=>(
                // map = mapping
                <CardProduct key={product.id}>
                    {/* harus menggunakan key jika menggunakn list */}
                    <CardProduct.Header image={product.image} id={product.id}></CardProduct.Header>
                    <CardProduct.Body name={product.title} >
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer  price={product.price}id={product.id}></CardProduct.Footer>
                </CardProduct>    
            ))}        
            </div>
            <div className="w-1/4">
                <h1 className="text-3xl font-bold text-red-600 ml-5 mb-5">cart</h1>
                <TableCart products={products}/>
            </div>
        </div>
        </Fragment>
    )
}

export default ProductPages;

    