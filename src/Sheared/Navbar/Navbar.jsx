import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";




const Navbar = () => {
    return (
        <div>
            <Headroom>
                <div className="navbar z-50 flex bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 border-none w-52">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li>
                                    <a>T-SHIRT</a>
                                    <ul className="flex flex-col justify-center items-center border-none">
                                        <li className="border-b-2 w-full"><NavLink to='/branded'>BRANDED</NavLink></li>
                                        <li className="border-b-2 w-full"><NavLink to='/tv'>TV-Series</NavLink></li>
                                        <li className="border-b-2 w-full"><NavLink to='/anime'>Anime</NavLink></li>
                                        <li className="border-b-2 w-full"><NavLink to='/design'>Design</NavLink></li>
                                    </ul>
                                </li>
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
                            <li tabIndex={0}>
                                <details>
                                    <summary>T-SHIRT</summary>
                                    <ul className="flex flex-col justify-center items-center border-none">
                                        <li className="w-full"><NavLink to='/branded'>BRANDED</NavLink></li>
                                        <li className="w-full"><NavLink to='/tv'>TV-Series</NavLink></li>
                                        <li className="w-full"><NavLink to='/anime'>Anime</NavLink></li>
                                        <li className="w-full"><NavLink to='/design'>Design</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                            <li><NavLink to='/polo'>POLO</NavLink></li>
                            <li><NavLink to='/sweatShirt'>SWEATSHART</NavLink></li>
                            <li><NavLink to='/category'>CATEGORY</NavLink></li>
                            <li><NavLink to='/login'>LOGIN</NavLink></li>
                        </ul>
                    </div>
                    {/* <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/MBFBvV1/blank-profile-picture-973460-1920.png" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 opacity-30 w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> */}
                    <div className="drawer drawer-end w-8">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
                            <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle avatar">
                                <FiShoppingCart />
                            </label>
                        </div>
                        <div className="drawer-side z-50">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </div>
                    </div >
                </div >
            </Headroom >
        </div >
    );
};

export default Navbar;