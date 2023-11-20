// import Marquee from "react-fast-marquee";

const Category = () => {
    return (
        <div>
            <div className='w-full flex '>
                <div className="w-30 border-b-4">
                </div>
                <div>
                    <h1 className="text-3xl text-zinc-500 text-center mt-10">T-SHIRT CATEGORIES</h1>
                </div>
                <div>
                    <hr />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="">
                    <img src="https://i.ibb.co/q5QFXHm/8-247x296.png" alt="" />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/DY5n4P9/7-247x296.png" alt="" />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/m89qwyD/6-1-247x296.png" alt="" />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/RhPKZhG/5-1-247x296.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Category;