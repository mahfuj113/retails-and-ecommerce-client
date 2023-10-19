import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";
import { useState } from "react";
import BrandSlider from "./BrandSlider";

const Apple = () => {
    const products = useLoaderData()
    const [productItem, setProduct] = useState(products)
    return (
        <div>
            <BrandSlider></BrandSlider>
            <div className="mt-12 mb-12">
                {
                    productItem.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 p-3 lg:p-0">
                            {
                                productItem?.map(product => <AppleCard
                                    key={product._id}
                                    product={product}
                                    productItem={productItem}
                                    setProduct={setProduct}
                                ></AppleCard>)
                            }
                        </div>) : (
                        <div>
                            <h2 className="text-center font-bold text-3xl">There is no product available</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Apple;