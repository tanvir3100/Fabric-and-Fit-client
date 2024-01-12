import HelmetSection from "../../Helmet/HelmetSection";
import Navbar from "../../Sheared/Navbar/Navbar";
import Banner from "./Banner";
import Cart from "./Cart";
import Category from "./Category";
import Glary from "./Glary";
import TShart from "./TShart";


const Home = () => {
    return (
        <div>
            <HelmetSection
                title={'Fabric & Fit | Home'}
            />
            <Navbar />
            <Cart />
            <Category />
            <TShart />
            <Banner />
            <Glary/>
        </div>
    );
};

export default Home;