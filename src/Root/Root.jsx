import { Outlet } from "react-router-dom";
import NavBar from "../Layout/NavBar/NavBar";
import Footer from "../Layout/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-10 ">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;