import HelmetSection from "../../Helmet/HelmetSection";
import Navbar from "../../Sheared/Navbar/Navbar";
import Banner from "./Banner";
import Cart from "./Cart";
import Category from "./Category";
import Review from './Review.jsx'
import Glary from "./Glary";
import Offer from "./Offer";
import TShart from "./TShart";
import Hero from './Hero.jsx'


const Home = () => {
    return (
        <div>
            <HelmetSection
                title={'Fabric & Fit | Home'}
            />
            <Navbar />
            <Hero/>
            <Cart />
            <Category />
            <TShart />
            <Banner />
            <Glary />
            <Offer />
            <Review />
        </div>
    );
};

export default Home;