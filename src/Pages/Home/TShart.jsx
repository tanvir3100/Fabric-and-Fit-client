import useCart from '../../Hooks/useCart'

const TShart = () => {
    const [tShirts] = useCart();
    return (
        <div className='px-5 md:px-12 lg:px-32 mx-auto'>
            <div className="divider text-2xl mb-20">T-SHIRT CATEGORIES</div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    tShirts.map(tShirt => <div key={tShirt._id} className="card bg-base-100 relative group">
                        <figure><img src={tShirt.image} alt="Shoes" className='w-full group-hover:opacity-75' /></figure>
                        <div className="card-body p-0">
                            <h2 className="text-xl">{tShirt.name}</h2>
                            <p>{tShirt.price}</p>
                        </div>
                        <div className='bg-cyan-600 p-2 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity w-full h-20 bottom-[19%] top-0'>
                            <p className='text-white'>Quick View</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TShart;