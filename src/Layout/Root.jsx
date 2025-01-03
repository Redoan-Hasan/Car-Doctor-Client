import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-[100px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;