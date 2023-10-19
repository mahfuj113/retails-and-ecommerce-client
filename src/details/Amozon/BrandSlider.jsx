const BrandSlider = () => {
    return (
        <div data-aos='fade-up' className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[500px]">
                <img src='https://i.ibb.co/Fx1fH2V/slider-Brand.jpg' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <p className="text-[#594ef3] text-center font-bold text-4xl">Shop the Best Deals on the Latest Fashion Trends<span className="text-white"> Discover Our<br />Exclusive Discounts</span></p>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[500px]">
                <img src="https://i.ibb.co/jH1MKLf/slider2.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <h1 className="text-[#0c170f] text-4xl text-center font-bold">New Arrivals Just In. Grab Yours Today Upgrade Your Style.  <span className="text-[#0c170f]">TO <br /> Unveil Our Premium Collections</span></h1>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[500px]">
                <img src="https://i.ibb.co/n81KW1h/slider3.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <h1 className="text-white text-4xl font-bold">Limited Time Offer. Free Shipping on All Orders <br /> Get Ready for the Holidays with Our Festive Collection</h1>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[500px]">
                <img src="https://i.ibb.co/LgkLD3T/ecommerce-2140603-640.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <p className="text-[#594ef3] text-4xl font-bold">Shop with Confidence. Hassle-Free Returns <br /> Elevate Your Home with <span className="text-white">Our Exclusive Decor</span></p>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BrandSlider;