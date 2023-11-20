import Navbar from "../../Sheared/Navbar/Navbar";
import Banner from "./Banner";
import Cart from "./Cart";
import Category from "./Category";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Cart />
            <Category/>
        </div>
    );
};

export default Home;