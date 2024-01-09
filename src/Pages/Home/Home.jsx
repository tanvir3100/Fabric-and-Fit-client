import Navbar from "../../Sheared/Navbar/Navbar";
import Banner from "./Banner";
import Cart from "./Cart";
import Category from "./Category";
import TShart from "./TShart";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Cart />
            <Category />
            <TShart />
        </div>
    );
};

export default Home;