import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;