import { useForm } from "react-hook-form";
import Navbar from "../../Sheared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from '../../../public/Animation - 1706105377269.json'
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider'


const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()


    const from = location.state?.from?.pathname || '/';
    console.log('location form state', location.state)

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        signInUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);

            navigate(from, {replace: true});
        })
        .then(error => {
            console.log(error)
        })
    }



    return (
        <div>
            <Navbar />
            <div className="hero h-[80vh]">
                <div className="hero-content flex-col lg:flex-row-reverse h-full">
                    <div className="text-center lg:text-left lg:flex-1">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <div className="flex justify-center items-center">
                            <Lottie className="w-5/6 lg:w-3/4 text-center" animationData={animationData} />
                        </div>
                    </div>
                    <div className="lg:flex-1">
                        <div className="card shrink-0 shadow-2xl bg-base-100 lg:w-3/4 lg:h-4/5 rounded-none">
                            <form className="card-body rounded-none" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className="text-center pb-3">If Not Register ? <Link to='/register'><span className="text-red-600 hover:underline">Register</span></Link> Now.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;