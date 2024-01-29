import useCart from "../../Hooks/useCart";
import Navbar from "../../Sheared/Navbar/Navbar";
import { Typewriter } from 'react-simple-typewriter'


const SweatShirt = () => {
    const [tShirts] = useCart();
    return (
        <div>
            <Navbar />
            <div className="h-64 flex justify-center items-center">
                <div className="w-full h-32">
                    <h1 className="text-xl text-center text-white my-3">
                        <span className="text-black text-3xl">
                            <Typewriter words={['EXPLORE OUR', 'EXQUISITE COLLECTION', 'OF SWEATSHIRT TODAY!']}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-12 lg:px-32 mx-auto gap-4 lg:gap-4 mb-10">
                {
                    tShirts?.map(tShirt => <div key={tShirt._id} className="card card-compact rounded-none bg-base-100 shadow-xl">
                        <figure><img src={tShirt.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{tShirt.name}</h2>
                            <div className="flex items-center gap-4 my-2">
                                <div>
                                    <div className="w-full"><button className="btn btn-sm lg:btn rounded-none">S</button></div>
                                </div>
                                <div>
                                    <div className="w-full"><button className="btn btn-sm lg:btn rounded-none">L</button></div>
                                </div>
                                <div>
                                    <div className="w-full"><button className="btn btn-sm lg:btn rounded-none">XL</button></div>
                                </div>
                                <div>
                                    <div className="w-full"><button className="btn btn-sm lg:btn rounded-none">XXL</button></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div>
                                    <a className="text-xl">PRICE: <span className="font-bold">{tShirt.price}</span></a>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn rounded-none border-black">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SweatShirt;