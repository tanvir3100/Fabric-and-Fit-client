import { Typewriter } from "react-simple-typewriter";
import Navbar from "../../Sheared/Navbar/Navbar";


const Category = () => {
    return (
        <div>
            <Navbar />
            <div className="h-64 flex justify-center items-center">
                <div className="w-full h-32">
                    <h1 className="text-xl text-center text-white my-3">
                        <span className="text-black text-3xl">
                            <Typewriter words={['EXPLORE OUR EXQUISITE COLLECTION', 'WITH DIFFERENT CATEGORIES TODAY!']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000} />
                        </span>
                        <br />
                        <span className="text-3xl"></span>
                    </h1>
                </div>
            </div>
            <div className="px-5 md:px-12 lg:px-32 mx-auto">

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="">
                        <img src="https://i.ibb.co/q5QFXHm/8-247x296.png" alt="" />
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/DY5n4P9/7-247x296.png" alt="" />
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/m89qwyD/6-1-247x296.png" alt="" />
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/RhPKZhG/5-1-247x296.png" alt="" />
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/RhPKZhG/5-1-247x296.png" alt="" />
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/q5QFXHm/8-247x296.png" alt="" />
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/DY5n4P9/7-247x296.png" alt="" />
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/m89qwyD/6-1-247x296.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;