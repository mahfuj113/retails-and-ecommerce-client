// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brand = () => {
    const brands = useLoaderData()
    // const name = "Best Buy";
    // const img = "https://i.ibb.co/QXGjhD5/Education.png"
    // const walmart = "walmart"
    // const walmartImg = "https://i.ibb.co/QXGjhD5/Education.png"
    // const alibaba = ""
    // const category = {
    //     name, img
    // }
    // console.log(category);
    // useEffect(() => {
    //     fetch("http://localhost:5000/create-category", {
    //         method: "POST",
    //         headers: {"Content-type": "application/json"},
    //         body: JSON.stringify(category)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }, [])
    return (
        <div className="lg:p-10 p-3">
            <h1 className="text-4xl font-bold text-center my-10">Our Brands</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;