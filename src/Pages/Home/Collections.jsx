import useCart from "../../Hooks/useCart";

const Collections = () => {

    const [tShirts] = useCart();

    return (
        <div className="bg-base-200 py-10 w-full px-2 lg:px-0 mx-auto">
            <div className="px-4 md:px-12 lg:px-32 mx-auto">
                <div className="text-2xl mb-5">Our Hot Dells</div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-4">
                    {
                        tShirts.map(tShirt => <div key={tShirt._id} className="card card-side bg-base-100 shadow-xl h-24 rounded-none">
                            <figure className="w-2/5 lg:w-1/4"><img src={tShirt.image} alt="Movie" /></figure>
                            <div className="card-body p-1 lg:p-4 flex-grow">
                                <h2 className="text-sm">{tShirt.name.length > 13 ? `${tShirt.name.slice(0, 13)}`: tShirt.name}</h2>
                                <div className="card-actions justify-end">
                                    <p>{tShirt.price}</p>
                                    <button
                                        onClick={() => document.getElementById('my_modal_3').showModal()}
                                        className="btn btn-sm  bg-cyan-600 hover:bg-cyan-600 text-white border-none rounded-none">
                                        watch
                                    </button>
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
            </div>
        </div>
    );
};

export default Collections;