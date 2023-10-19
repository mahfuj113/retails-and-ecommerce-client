import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const brandName = form.get("brandName")
        const type = form.get('type')
        const price = form.get('price')
        const rating = form.get('rating')
        const details = form.get('details')
        const photo = form.get('photo')
        const product = { name, brandName, type, price, rating, details, photo }
        console.log(product);
        fetch('http://localhost:5000/product', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    e.target.reset()
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully',
                        text: 'Product added',
                      })
                }
            })
    }
    return (
        <div className="bg-[#c2a347] p-5 lg:p-28">
            <h2 className="text-3xl font-bold text-center">Add Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* form row */}
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" required placeholder="Your name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select className="p-3" name="brandName" required id="">
                            <option value="" disabled selected>Select brand</option>
                            <option value='apple'>Apple</option>
                            <option value='google'>Google</option>
                            <option value='xiaomi'>Xiaomi</option>
                            <option value='walton'>Walton</option>
                            <option value='lg'>LG</option>
                            <option value='samsung'>Samsung</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Your Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" required placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" placeholder="Your Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details  " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-4 mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Your photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-info w-full" />
            </form>
        </div>
    );
};

export default AddProduct;