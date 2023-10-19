import { useContext } from "react";
import { GrGoogle } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const {signIn,googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        
        console.log(email,password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('You successfully login')
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                toast.error(error.message);
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
        <div className="bg-blue-500 md:w-2/4 lg:w-1/4 mx-auto p-6 rounded-sm">
            <h1 className="text-3xl text-white text-center">Login your account</h1>
            <form onSubmit={handleLogin}>
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
                <div className="form-control mt-6">
                    <button className="btn bg-[#F75B5F] text-xl text-white hover:bg-[#F75B5F]">Login</button>
                </div>
                <p className="mt-4">Do not have an account? <Link to='/register' className="text-[#F75B5F] font-bold">Register</Link></p>
            </form>
            <div className=" mt-5">
                <button onClick={handleGoogleLogin} className="btn bg-[#F75B5F] text-white  hover:bg-[#F75B5F] "><GrGoogle></GrGoogle>Google Login</button>
            </div>
        </div>
    );
};

export default Login;