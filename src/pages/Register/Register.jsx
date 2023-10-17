import { Link, useLocation, useNavigate } from "react-router-dom";
import { GrGoogle } from 'react-icons/gr'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, handleUpdateProfile,googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const img = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, img, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                handleUpdateProfile(name, img)
                    .then(() => {
                        Swal.fire(
                            'User created successfully',
                            '',
                            'success'
                        )
                        navigate('/')
                        window.location.reload()
                    })
            })
            .catch(error => {
                Swal.fire(error.message)
            })

    }
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
            navigate(location.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error.message);
        })
    }
    return (
        <div className="md:w-2/4 lg:w-1/4  mx-auto bg-blue-500 p-5">
            <h1 className="text-3xl text-white text-center">Register your account</h1>
            <form onSubmit={handleRegister}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email address</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-4">
                    <button className="btn bg-[#F75B5F] hover:bg-[#F75B5F] text-white text-xl">Register</button>
                </div>
                <p className="mt-2">Already have an account? <Link to='/login' className="text-[#F75B5F] font-bold">Login</Link></p>
            </form>
            <div className="mt-4">
                <button onClick={handleGoogleLogin} className="btn bg-[#F75B5F] hover:bg-[#F75B5F] text-white"><GrGoogle></GrGoogle>Google Login</button>
            </div>
        </div>
    );
};

export default Register;