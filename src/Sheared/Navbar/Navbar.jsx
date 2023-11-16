

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 flex justify-between border-b-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border-none w-52">
                        <li>
                            <a>T-SHIRT</a>
                            <ul className="flex flex-col justify-center items-center border-none">
                                <li className="border-b-2 w-full"><a>BRANDED</a></li>
                                <li className="border-b-2 w-full"><a>TV-Series</a></li>
                                <li className="border-b-2 w-full"><a>Anime</a></li>
                                <li className="border-b-2 w-full"><a>Design</a></li>
                            </ul>
                        </li>
                        <li><a>POLO</a></li>
                        <li><a>SWEATSHART</a></li>
                        <li><a>CATEGORY</a></li>
                        <li><a>LOGIN</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        <details>
                            <summary>T-SHIRT</summary>
                            <ul className="flex flex-col justify-center items-center border-none">
                                <li className="border-b-2 w-full"><a>BRANDED</a></li>
                                <li className="border-b-2 w-full"><a>TV-Series</a></li>
                                <li className="border-b-2 w-full"><a>Anime</a></li>
                                <li className="border-b-2 w-full"><a>Design</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>POLO</a></li>
                    <li><a>SWEATSHART</a></li>
                    <li><a>CATEGORY</a></li>
                    <li><a>LOGIN</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 opacity-30 w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;