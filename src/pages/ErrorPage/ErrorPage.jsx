import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center my-20">
            <p className="mb-4 text-4xl">404 Page Not Found</p>
            <div>
                <Link to='/'><button className="btn btn-warning">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;