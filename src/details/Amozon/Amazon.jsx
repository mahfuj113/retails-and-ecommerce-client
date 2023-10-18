import { useLoaderData } from "react-router-dom";
import AmazonCard from "./AmazonCard";

const Amazon = () => {
    const products = useLoaderData()
    return (
        <div>
            <h2>This is amazon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
                {
                    products.map(product => <AmazonCard key={product._id} product={product}></AmazonCard>)
                }
            </div>
        </div>
    );
};

export default Amazon;