import Brand from './Brand/Brand';
import Features from './Features';
import Footer from './Footer';
import Review from './Review';
import Banner from './banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <Review></Review>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Home;