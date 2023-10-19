import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className='lg:p-10'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;