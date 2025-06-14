import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkModeContext } from "../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../context/TotalPriceContext";

const TableCart = ({products,...props}) => {
    const cart = useSelector((state) => state.cart.data);
    const dispatch = useTotalPriceDispatch();
    const {isDarkMode}= useContext(DarkModeContext);
    const {total = 0} =  useTotalPrice();

    // useEffect = digunakan untuk menjalankan suatu fungsi ketika komponen di render
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + (product ? product.price * item.qty : 0);
            }, 0);
            dispatch({
                type: "UPDATE",
                total: sum,
            });
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products, dispatch]);
    

    const totalPriceRef = useRef(null);
    // useRef = digunakan untuk membuat referensi pada suatu

    useEffect(()=>{
        if(products.length > 0){
            totalPriceRef.current.style.display = "block";
        }else{
            totalPriceRef.current.style.display = "none";
        }
    },[cart,products]);

    return(
        <Fragment>
                <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode ? "text-white" : "text-black"}`}> 
        <thead>
           <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
           </tr>
        </thead>
        <tbody>
            {products.length > 0 && cart.map((items, index) => {
            const product = products.find((product) => product.id === items.id);
            if (!product) return null;
            return (
                <tr key={`${items.id}-${index}`}> {/* Kombinasi id dan index sebagai key */}
                    <td>{product.title}</td>
                    <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                    <td>{items.qty}</td>
                    <td>{(product.price * items.qty).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                </tr>
            );
            })}
            <tr ref={totalPriceRef}>
                <td colSpan={3}>Price</td>
                <td>{total.toLocaleString('id-ID',{style:'currency',currency:'IDR'}) }</td>
            </tr>
        </tbody>
    </table>  
        </Fragment>
    )
}

export default TableCart;

// Penjelasan code diatas:
// Pertama kita akan mengimport beberapa library yang dibutuhkan untuk membuat komponen TableCart
// Lalu kita akan membuat komponen TableCart dengan parameter products dan props
// Lalu kita akan membuat variabel cart yang berisi useSelector yang berfungsi untuk mengambil state cart dari redux