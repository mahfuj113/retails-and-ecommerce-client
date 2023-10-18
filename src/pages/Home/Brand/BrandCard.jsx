import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const BrandCard = ({ brand }) => {
    const { name, img } = brand;
    console.log(brand);
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <Link to={`/${name.toLowerCase()}`}>
                <figure><img src={img} alt="Shoes" /></figure>
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