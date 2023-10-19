import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const BrandCard = ({ brand }) => {
    const { name, img } = brand;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <Link to={`/brand/${name.toLowerCase()}`}>
                <figure><img className='h-[290px] w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                </div>
            </Link>
        </div>
    );
};
BrandCard.propTypes = {
    brand: PropTypes.object.isRequired,
}
export default BrandCard;