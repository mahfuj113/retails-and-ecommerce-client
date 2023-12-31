import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FiDollarSign } from 'react-icons/fi'
import Swal from 'sweetalert2';
import Ratings from '../../shared/Ratings';

const AppleCard = ({ product, productItem, setProduct }) => {
    const { _id, name, photo, brandName, details, price, rating, type, } = product
    console.log(product);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://retail-and-e-commerce-server-five.vercel.app/product/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = productItem.filter(pd => pd._id !== _id)
                            setProduct(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })
            }
        })
    }
    return (
        <div className="card bg-base-100 shadow-xl mb-20">
            <figure><img className='h-80' src={photo} alt="Shoes" /></figure>
            <div className="p-5 bg-base-200 h-[300px]">
                <div className='flex h-[120px]'>
                    <div className='flex-1'>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className='flex items-center text-lg font-bold'>Price: {price}<FiDollarSign></FiDollarSign></p>
                    </div>
                    <div className='flex-1 justify-center'>
                        <p>Brand: <span className='uppercase'>{brandName}</span></p>
                        <Ratings rating={rating}/>
                        <p>Type: {type}</p>
                    </div>
                </div>
                <p className='my-3'>{details.length > 50 ? details.slice(0,100) : ""}</p>
                <div className="card-actions">
                    <Link to={`/details/${_id}`}>
                        <button className="btn text-black bg-[#25dfecee] hover:bg-[#d331a2]">Details</button>
                    </Link>
                    <Link to={`/update/${_id}`}>
                        <button className="btn text-black bg-[#25dfecee] hover:bg-[#d331a2]">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className='btn text-black  bg-[#25dfecee] hover:bg-[#d331a2]'>Delete</button>
                </div>
            </div>
        </div>
    )
}

AppleCard.propTypes = {
    product: PropTypes.object.isRequired,
    setProduct: PropTypes.func.isRequired,
    productItem: PropTypes.array.isRequired,
}

export default AppleCard;