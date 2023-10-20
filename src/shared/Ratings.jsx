import PropTypes from 'prop-types'
const Ratings = ({ rating }) => {
    const starPrint = () => {
        let ratingArray = [];
        for (let i = 0; i < rating; i++) {
            ratingArray[i] = <i className="text-primary fas fa-star"></i>;
        }
        for (let i = 1; i <= 5 - rating; i++) {
            ratingArray[5 - i] = <i className="fas fa-star"></i>;
        }
        return ratingArray;
    };
    return (
        <div>
            {starPrint(rating).map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
};
Ratings.propTypes = {
    rating: PropTypes.any
}
export default Ratings;