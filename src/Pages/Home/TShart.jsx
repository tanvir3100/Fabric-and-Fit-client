import useCart from '../../Hooks/useCart'

const TShart = () => {
    const [tShirts] = useCart();
    return (
        <div>
            <div className="divider text-2xl mb-20">T-SHIRT CATEGORIES</div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    tShirts.map(tShirt => <div key={tShirt._id} className="card bg-base-100 rounded-none">
                        <figure><img src={tShirt.image} alt="Shoes" /></figure>
                        <div className="card-body p-0">
                            <h2 className="text-xl">{tShirt.name}</h2>
                            <p>{tShirt.price}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TShart;