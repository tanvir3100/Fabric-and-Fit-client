import Card from "../../Components/Shear/Card";
import useCart from "../../Hooks/useCart";
import Navbar from "../../Sheared/Navbar/Navbar";
import { Typewriter } from 'react-simple-typewriter'


const Polo = () => {
    const [tShirts] = useCart();
    return (
        <div>
            <Navbar />
            <div className="h-64 flex justify-center items-center">
                <div className="w-full h-32">
                    <h1 className="text-xl text-center text-white my-3">
                        <span className="text-black text-3xl">
                            <Typewriter words={['EXPLORE OUR', 'EXQUISITE COLLECTION', 'OF POLOS TODAY!']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000} />
                        </span>
                        <br />
                        <span className="text-3xl"></span>
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5  px-5 md:px-12 lg:px-32 mx-auto gap-4 lg:gap-4 mb-10">
                {
                    tShirts?.map(tShirt => <Card key={tShirt._id} tShirt={tShirt} />)
                }
            </div>
        </div>
    );
};

export default Polo;