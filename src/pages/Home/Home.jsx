import Brand from './Brand/Brand';
import Features from './Features';
import Review from './Review';
import Banner from './banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <Review></Review>
            <Features></Features>
        </div>
    );
};

export default Home;