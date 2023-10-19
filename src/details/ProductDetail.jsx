import { FiDollarSign } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Ratings from "../shared/Ratings";

const ProductDetail = () => {
    const productItem = useLoaderData()
    const { photo, details, type, price, name, brandName, rating } = productItem
    const cartItem = { photo, details, type, price, name, brandName, rating }
    const handleAddCart = () => {
        fetch('http://localhost:5000/myCart', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(cartItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'successfully',
                        'Product Added',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="lg:flex items-center p-4 lg:p-0">
            {/* <div className="card lg:card-side"> */}
            <figure className="flex-1 justify-center items-center"><img src={photo} alt="Album" /></figure>
            <div className="md:m-10 flex-1 space-y-3">
                <h2 className="text-xl lg:text-3xl font-bold">{name}</h2>
                <p className='flex items-center text-xl lg:text-3xl font-bold'>Price: {price}<FiDollarSign></FiDollarSign></p>
                <p>Brand: {brandName}</p>
                <Ratings rating={rating}/>
                <p>Type: {type}</p>
                <p>{details}</p>
                <div className="card-actions ">
                    <button onClick={handleAddCart} className="btn text-black bg-[#4d9ec6] hover:bg-[#d3aa31]">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;