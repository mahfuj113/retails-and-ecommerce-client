import { FiDollarSign } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetail = () => {
    const productItem = useLoaderData()
    const {photo,details,type,price,name,brandName,rating} = productItem
    const cartItem = {photo,details,type,price,name,brandName,rating}
    const handleAddCart = () => {
        fetch('http://localhost:5000/myCart',{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                        'successfully',
                        'Product Added',
                        'success'
                      )
            }
        })
    }
    return (
        <div className="card lg:card-side">
            <figure className="flex-1"><img src={photo} alt="Album" /></figure>
            <div className="card-body md:m-10 flex-1">
                <h2 className="card-title">{name}</h2>
                <p className='flex items-center text-lg'>Price: {price}<FiDollarSign></FiDollarSign></p>
                <p>Brand: {brandName}</p>
                <p>Rating: {rating}</p>
                <p>Type: {type}</p>
                <p>{details}</p>
                <div className="card-actions ">
                    <button onClick={handleAddCart} className="btn btn-primary">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;