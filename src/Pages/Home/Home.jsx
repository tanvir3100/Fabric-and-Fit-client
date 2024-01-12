import HelmetSection from "../../Helmet/HelmetSection";
import Navbar from "../../Sheared/Navbar/Navbar";
import Banner from "./Banner";
import Cart from "./Cart";
import Category from "./Category";
import Customer from "./Customer";
import Glary from "./Glary";
import Offer from "./Offer";
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
            <Glary />
            <Offer />
            <Customer />
        </div>
    );
};

export default Home;