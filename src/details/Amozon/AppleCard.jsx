import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FiDollarSign } from 'react-icons/fi'

const AppleCard = ({ product }) => {
    const { _id, name, photo, brandName, details, price, rating, type, } = product
    console.log(product);
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='max-h-80' src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='flex items-center text-lg'>Price: {price}<FiDollarSign></FiDollarSign></p>
                <p>Brand: <span className='uppercase'>{brandName}</span></p>
                <p>Rating: {rating}</p>
                <p>Type: {type}</p>
                <p>{details}</p>
                <div className="card-actions ">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                    <Link to={`/update/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

AppleCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default AppleCard;