import useCart from "../../Hooks/useCart";

const Collections = () => {

    const [tShirts] = useCart();
    console.log(tShirts)

    return (
        <div className="bg-base-200 py-10 w-full">
            <div className="md:px-12 lg:px-32 mx-auto">
                <div className="divider text-2xl mb-20">Hot Dells</div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {
                        tShirts.map(tShirt => <div key={tShirt._id} className="card card-side bg-base-100 shadow-xl h-24 rounded-none">
                            <figure className="w-1/4"><img src={tShirt.image } alt="Movie" /></figure>
                            <div className="card-body p-4">
                                <h2 className="text-sm">{tShirt.name}</h2>
                                <div className="card-actions justify-end">
                                    <p>{tShirt.price}</p>
                                    <button className="btn btn-sm  bg-cyan-600 hover:bg-cyan-600 text-white border-none rounded-none">watch</button>
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