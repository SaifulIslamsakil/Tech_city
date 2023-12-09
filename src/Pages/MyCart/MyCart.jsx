import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddedCart from "../../Components/AddedCart/AddedCart";

const MyCart = () => {
    const datas = useLoaderData()
    const [cartData,setCartData] = useState(datas)
    console.log(cartData)
    return (
        <div className="grid md:grid-cols-2 gap-5 p-5 bg-slate-100">
      
           {
            cartData.map(cart => <AddedCart
            key={cart._id}
            cartData={cartData}
            setCartData={setCartData}
            cart={cart}
            ></AddedCart>)
           }
           
        </div>
    );
};

export default MyCart;