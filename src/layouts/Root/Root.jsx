import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";

const Root = () => {
    return (
        <div className="max-w-[1140px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;