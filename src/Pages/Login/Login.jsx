import { useForm } from "react-hook-form";
import Navbar from "../../Sheared/Navbar/Navbar";
import { Link } from "react-router-dom";


const Login = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <Navbar />
            <div className="hero h-[80vh]">
                <div className="hero-content flex-col lg:flex-row-reverse h-full">
                    <div className="text-center lg:text-left flex-1">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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