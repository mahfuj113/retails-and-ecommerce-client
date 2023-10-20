// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import Ratings from "../../shared/Ratings";

const Review = () => {
    const reviews = [
        {
            rating: "5",
            comment: "Impressive tech gadget! Lightning-fast performance and a sleek design make it a perfect addition to my tech arsenal.",
            email: "user1@gmail.com",
            name: "Hasan",
            photoURL: "https://i.ibb.co/nPZ06kM/logo-e-commerce.png",
        },
        {
            rating: "4",
            comment: "Game-changing innovation! This tech product has simplified my daily tasks and offers incredible value for the price.",
            email: "user2@gmail.com",
            name: "Anna",
            photoURL: "https://i.ibb.co/nPZ06kM/logo-e-commerce.png",
        },
        {   
            rating: "5",
            comment: "A must-have for tech enthusiasts! Outstanding performance, user-friendly interface, and it looks great on my desk.",
            email: "user3@gmail.com",
            name: "John",
            photoURL: "https://i.ibb.co/nPZ06kM/logo-e-commerce.png",
        },
    ];
    return (
        <>
            <section className="pt-10 pb-16 ">
                <div className="text-center">
                    <h2 className="mb-5 text-3xl lg:text-[30px] font-medium text-accent lg:leading-tight">What our customer says</h2>
                    <div className="custom-divider"></div>
                </div>
                <div className="container lg:max-w-7xl mx-auto mt-16">
                    <div className="lg:flex lg:flex-row lg:space-x-9">
                        <div
                            className="max-w-sm mx-auto w-full p-6 text-white text-center"
                            style={{ backgroundImage: `url(${'https://i.ibb.co/NmJPnq4/ezgif-com-webp-to-png-6.png'}), linear-gradient(#CC0102, #CC0102)`, backgroundSize: "cover", backgroundPosition: "center" }}
                        >
                            <div className="lg:mt-24">
                                <h4 className="text-3xl font-semibold py-3">2890+</h4>
                                <p className="uppercase font-medium">
                                    Satisfied <br /> Customer
                                </p>
                            </div>
                        </div>
                        <div className="py-5 px-5 lg:px-0 grow max-w-4xl mt-5 lg:mt-0">
                            {/* <Swiper
                                // install Swiper modules
                                className="reviewSwiper"
                                slidesPerView={1}
                                modules={[Pagination]}
                                spaceBetween={20}
                                navigation
                                speed={800}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            > */}
                            {reviews.map(({ rating, comment, _id, name }) => (
                                <div key={_id}>
                                    {/* <SwiperSlide key={_id}> */}
                                    <div>
                                        <div className="italic text-lg">{comment}</div>
                                        <div className="mt-3">
                                            <div id={_id} className="">
                                                {/* {starPrint(rating).map((star, index) => (
                                                        <span key={index}>{star}</span>
                                                    ))} */}
                                                <Ratings rating={rating} />
                                            </div>
                                            <h4 className="text-lg font-medium">{name}</h4>
                                        </div>
                                    </div>
                                </div>
                                // </SwiperSlide>
                            ))}
                            {/* </Swiper> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Review;