import { useLoaderData } from "react-router-dom";

const Update = () => {
    const updateProduct = useLoaderData()
    const { _id, name, brandName, type, price, photo, details, rating } = updateProduct
    console.log(updateProduct);
    const handleUpdateProduct = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const brandName = form.get("brandName")
        const type = form.get('type')
        const price = form.get('price')
        const rating = form.get('rating')
        const details = form.get('details')
        const photo = form.get('photo')
        const productUpdate = { name, brandName, type, price, rating, details, photo }
        console.log(productUpdate);
        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(productUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-5 lg:p-28">
            <h2 className="text-3xl font-bold text-center">Update Product</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* form row */}
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={name} name="name" placeholder="Your name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select className="p-3" name="brandName" defaultValue={brandName} required id="">
                            <option value="" disabled selected>Select brand</option>
                            <option value='apple'>Apple</option>
                            <option value='google'>Google</option>
                            <option value='xiaomi'>Xiaomi</option>
                            <option value='walton'>Walton</option>
                            <option value='lg'>LG</option>
                            <option value='samsung'>Samsung</option>
                        </select>
                        {/* <label className="input-group">
                            <input type="text" defaultValue={brandName} name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label> */}
                    </div>
                </div>
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type} placeholder="Your Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" defaultValue={rating} placeholder="Your Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details  " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-4 mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Your photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className="btn btn-info w-full" />
            </form>
        </div>
    );
};

export default Update;