import PropTypes from 'prop-types'
import { FiDollarSign } from 'react-icons/fi';
import Swal from 'sweetalert2';

const MyCartDetails = ({ cartDetail, cartData, setCartData }) => {
    const { _id, photo, name, brandName, price, details, type } = cartDetail
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
                fetch(`http://localhost:5000/myCart/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = cartData.filter(item => item._id !== _id)
                            setCartData(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
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
                        <p>Type: {type}</p>
                    </div>
                </div>
                <p className='my-3'>{details.length > 50 ? details.slice(0, 100) : ""}</p>
                <div className="card-actions">
                    <button onClick={() => handleDelete(_id)} className='btn text-black  bg-[#25dfecee] hover:bg-[#25dfecee]'>Delete</button>
                </div>
            </div>
        </div>
    )
}

MyCartDetails.propTypes = {
    cartDetail: PropTypes.object.isRequired,
    cartData: PropTypes.array.isRequired,
    setCartData: PropTypes.func.isRequired,
}

export default MyCartDetails