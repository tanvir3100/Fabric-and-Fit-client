const Card = ({ tShirt }) => {
    return (
        <div>
            <div className="card card-compact rounded-none bg-base-100 shadow-xl group">
                {/* <figure><img src={tShirt.image} alt="Shoes" /></figure> */}
                <div
                    className='aspect-square w-full relative overflow-hidden'>
                    <img
                        className='object-cover h-full w-full group-hover:scale-110 transition'
                        src={tShirt.image}
                        alt='Room'
                    />
                    <div className='absolute top-3 right-3'></div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-xl group-hover:underline">{tShirt.name}</h2>
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
                    <div className="flex items-center gap-5 flex-grow">
                        <div>
                            <a className="text-xl">PRICE: <span className="font-bold">{tShirt.price}</span></a>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn rounded-none border-black">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;