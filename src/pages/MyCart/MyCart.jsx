import { useLoaderData } from "react-router-dom";
import MyCartDetails from "./MyCartDetails";
import { useState } from "react";

const MyCart = () => {
    const myCartItmes = useLoaderData()
    const [cartData, setCartData] = useState(myCartItmes)
    return (
        <div>
            <h2>This is my cart {cartData.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    cartData.map(cartDetail => <MyCartDetails 
                        key={cartDetail._id} 
                        cartDetail={cartDetail}
                        cartData={cartData}
                        setCartData={setCartData}
                        ></MyCartDetails>)
                }
            </div> 
        </div>
    );
};

export default MyCart;