import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h3>hi</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;