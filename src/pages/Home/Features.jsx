const Features = () => {
    return (
        <div className="container max-w-7xl mx-auto lg:pb-20 lg:pt-10 py-16">
            <h2 className="text-text-primary text-4xl text-center pb-2 font-medium">All the features we provide to our sellers</h2>
            <h4 className="text-xl text-gray-500 text-center pb-10">Give us a try. There is nothing to install. No training manuals needed. No commitments.</h4>
            <div className="grid px-5 lg:px-0 lg:grid-cols-3 grid-cols-1 gap-5">
                <div className="bg-gradient-to-r from-white to-white hover:from-white hover:to-[#fffdf5] hover:border-blue-950 border border-gray-200 rounded-md p-5 transition duration-200 hover:duration-200">
                    <div className="flex flex-row items-center mb-3">
                        <h4 className="text-xl font-semibold text-md">Inventory Management</h4>
                    </div>
                    <p className="text-gray-600 m-0">Manage your inventory in real time and monitor stock levels. Receive low-inventory alerts and create buy orders to restock your inventory.</p>
                </div>
                <div className="bg-gradient-to-r from-white to-white hover:from-white hover:to-[#fffdf5] hover:border-blue-950 border border-gray-200 rounded-md p-5 transition duration-200 hover:duration-200">
                    <div className="flex flex-row items-center mb-3">
                        <h4 className="text-xl font-semibold text-md">Customer Accounts</h4>
                    </div>
                    <p className="text-gray-600 m-0">
                        You can easily keep track of all your client accounts with built-in CRM tools. Add multiple Items, Stocks, and Item history to your account.
                    </p>
                </div>
                <div className="bg-gradient-to-r from-white to-white hover:from-white hover:to-[#fffdf5] hover:border-blue-950 border border-gray-200 rounded-md p-5 transition duration-200 hover:duration-200">
                    <div className="flex flex-row items-center mb-3">
                        <h4 className="text-xl font-semibold text-md">Locations and Suppliers</h4>
                    </div>
                    <p className="text-gray-600 m-0">
                        Do you have several warehouses, offices, or retail locations? Or multiple suppliers? No worries. Organize your inventory into locations with suppliers to keep track of
                        where it is.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;