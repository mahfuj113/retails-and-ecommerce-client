import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../shared/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;