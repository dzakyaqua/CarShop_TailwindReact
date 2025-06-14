import { Link } from "react-router"
import Button from "../Elements/Buttons/Index"
import { useDispatch } from "react-redux"

import { addToCart } from "../../redux/slices/cartSlice"

const CardProduct=({children,...props})=>{
    return(
        <div className="w-64 max-w-xs bg-black border border-gray-500 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
            {children}
        </div>
    )
}

const Header=({image,id,...props})=>{
    return(
        <Link to={`/Product/${id}`}>
        <img src={image} alt="product" className="p-8 rounded-lg h-60 w-full"></img>
    </Link>
    )
}

const Body= ({name,children,...props}) =>{
    return(
        <div className="px-5 pb-5 h-full">
        <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-white">{name.substring(0,10)}</h5>
            <p className="text-white text-m">{children.substring(0,50)}</p>
            {/* substring(x,x)= berguna untuk membatasi banyaknya string yang bisa di tampilkan di dalam web */}
        </a>
    </div>
    )
}

const Footer = ({price,HandleAddToCa,id,dispatch = useDispatch(),...props}) => {
    return(
        <div className="flex items-center justify-between px-5 pb-5 gap-2">
        <span className="text-xl font-bold text-white">{price.toLocaleString('en-US',{style:'currency',currency:'USD'})}</span>
        {/* {price.toLocaleString('id-ID',{style:'currency',currency:'IDR'})} = berguna untuk mengubah nilai dalam suatu angka hingga jadi mudah di baca? */}
        <Button className="bg-red-600 mr-1" onClick={()=>dispatch(addToCart({id,qty:1}))}>beli</Button>
    </div>
    )
}

CardProduct.Header=Header;
CardProduct.Body=Body;
CardProduct.Footer=Footer;

export default CardProduct;