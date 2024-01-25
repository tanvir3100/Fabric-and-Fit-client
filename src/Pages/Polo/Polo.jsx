import useCart from "../../Hooks/useCart";
import Navbar from "../../Sheared/Navbar/Navbar";


const Polo = () => {
    const [tShirts] = useCart();
    return (
        <div>
            <Navbar />
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

export default Polo;