import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";

const Apple = () => {
    const products = useLoaderData()
    return (
        <div>
            <h2>This is amazon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
                {
                    products?.map(product => <AppleCard key={product._id} product={product}></AppleCard>)
                }
            </div>
        </div>
    );
};

export default Apple;