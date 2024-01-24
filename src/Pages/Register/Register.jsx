import { useForm } from "react-hook-form";
import Navbar from "../../Sheared/Navbar/Navbar";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from '../../../public/Animation - 1706105377269.json'


const Register = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
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
                            <p className="text-center pb-3">If Register ? <Link to='/login'><span className="text-green-600 hover:underline">Login</span></Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;