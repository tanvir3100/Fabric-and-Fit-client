import {Outlet} from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='px-0 md:px-12 lg:px-32 mx-auto'>
            <Outlet/>
        </div>
    );
};

export default MainLayout;