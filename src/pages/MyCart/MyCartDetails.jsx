import PropTypes from 'prop-types'
import { FiDollarSign } from 'react-icons/fi';
import Swal from 'sweetalert2';

const MyCartDetails = ({ cartDetail,cartData,setCartData }) => {
    const { _id, photo, name, brandName, price, description, type } = cartDetail
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
                        if(data.deletedCount > 0){
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
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='flex items-center text-lg'>Price: {price}<FiDollarSign></FiDollarSign></p>
                <div className="card-actions">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
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