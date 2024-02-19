import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import useCart from "../../Hooks/useCart";




const Navbar = () => {

    const [tShirts] = useCart();
    console.log(tShirts)
    return (
        <div>
            <Headroom>
                <div className="navbar z-50 flex justify-between lg:justify-end bg-base-100 px-6 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 border-none w-52">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/tShirt'>T-SHIRT</NavLink></li>
                                <li><NavLink to='/polo'>POLO</NavLink></li>
                                <li><NavLink to='/sweatShirt'>SWEATSHART</NavLink></li>
                                <li><NavLink to='/category'>CATEGORY</NavLink></li>
                                <li><NavLink to='/login'>LOGIN</NavLink></li>
                            </ul>
                        </div>
                        <img className="w-20" src="https://i.ibb.co/z4kCDTg/Fabric-black.png" alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 z-[5]">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/tShirt'>T-SHIRT</NavLink></li>
                            <li><NavLink to='/polo'>POLO</NavLink></li>
                            <li><NavLink to='/sweatShirt'>SWEATSHART</NavLink></li>
                            <li><NavLink to='/category'>CATEGORY</NavLink></li>
                            <li><NavLink to='/login'>LOGIN</NavLink></li>
                        </ul>
                    </div>
                    <div className="drawer drawer-end w-8 mr-5">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content p-2">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="btn btn-ghost avatar">
                                <div className="flex items-center justify-center">
                                    <div>
                                        <FiShoppingCart className="text-xl relative" />
                                    </div>
                                    <div className="bg-black text-white badge absolute top-[10%]">0+</div>
                                </div>
                            </label>
                        </div>
                        <div className="drawer-side z-50">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <h1 className="text-2xl text-center mb-5">YOUR CART</h1>
                                <div className="grid grid-cols-1 gap-2 lg:gap-4">
                                    {
                                        tShirts.map(tShirt => <div key={tShirt._id} className="card card-side bg-base-100 shadow-xl h-24 rounded-none">
                                            <figure className="w-2/5 lg:w-1/4"><img src={tShirt.image} alt="Movie" /></figure>
                                            <div className="card-body p-1 lg:p-4 flex-grow">
                                                <h2 className="text-sm">{tShirt.name.length > 13 ? `${tShirt.name.slice(0, 13)}` : tShirt.name}</h2>
                                                <div className="card-actions justify-end">
                                                    <p>{tShirt.price}</p>
                                                    <button
                                                        onClick={() => document.getElementById('my_modal_3').showModal()}
                                                        className="btn btn-sm  bg-cyan-600 hover:bg-cyan-600 text-white border-none rounded-none">
                                                        watch
                                                    </button>
                                                    <button className="text-white btn btn-sm rounded-none bg-red-700 hover:bg-red-700"><AiOutlineDelete /> </button>
                                                    <dialog
                                                        id="my_modal_3"
                                                        className="modal">
                                                        <div className="modal-box rounded-none w-3/4">
                                                            <form method="dialog">
                                                                {/* if there is a button in form, it will close the modal */}
                                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                            </form>
                                                            <div className="hero bg-base-200 mt-10">
                                                                <div className="hero-content flex-col lg:flex-row">
                                                                    <img src={tShirt.image} className="w-[50%] shadow-2xl" />
                                                                    <div>
                                                                        <h1 className="text-2xl font-bold">{tShirt.name}</h1>
                                                                        <p className="py-6">Shot description:{tShirt.description}</p>
                                                                        <div className="dropdown dropdown-top dropdown-end">
                                                                            <div tabIndex={0} role="button" className="btn m-1 rounded-none">Sizes</div>
                                                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52 rounded-none">
                                                                                <li>{tShirt.sizes}</li>
                                                                            </ul>
                                                                        </div>
                                                                        <button className="btn rounded-none bg-cyan-400 hover:bg-cyan-600 hover:text-white">Add to cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </dialog>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </ul>
                        </div>
                    </div >
                </div >
            </Headroom >
        </div >
    );
};

export default Navbar;