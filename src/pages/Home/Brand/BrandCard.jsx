import PropTypes from 'prop-types'
const BrandCard = ({brand}) => {
    const {name, img} = brand;
    console.log(brand);
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};
BrandCard.propTypes = {
    brand: PropTypes.object.isRequired,
}
export default BrandCard;