// import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart'

const TShart = () => {
    const [tShirts] = useCart();
    return (
        <div className='px-5 md:px-12 lg:px-32 mx-auto'>
            <div className="divider text-2xl mb-20">T-SHIRT CATEGORIES</div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    tShirts.map(tShirt => <div key={tShirt._id} className="card bg-base-100 relative group rounded-none">
                        <figure><img src={tShirt.image} alt="Shoes" className='w-full group-hover:opacity-75' /></figure>
                        <div className="card-body p-0">
                            <h2 className="text-xl">{tShirt.name}</h2>
                            <p>{tShirt.price}</p>
                        </div>
                        <div className='bg-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity w-full h-10 md:top-[72.5%] lg:top-[68.5%]'>
                            {/* <button className='w-full bg-cyan-600'>
                                    <p className='text-white btn rounded-none w-full bg-cyan-600 hover:bg-cyan-600 border-none'>Quick View</p>
                                </button> */}
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button
                                className="w-full bg-cyan-600"
                                onClick={() => document.getElementById('my_modal_3').showModal()}>
                                <p className='text-white btn rounded-none w-full bg-cyan-600 hover:bg-cyan-600 border-none'>Quick View</p>
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
                                                    <div tabIndex={0} role="button" className="btn m-1">Sizes</div>
                                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
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
                    </div>)
                }
            </div>
        </div>
    );
};

export default TShart;


