import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const Root = () => {
    return (
        <div className='lg:p-10'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;