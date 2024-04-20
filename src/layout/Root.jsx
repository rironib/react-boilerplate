import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Root = () => {
    return (
        <>
            <Header/>
            <main className='w-11/12 max-w-[1280px] mx-auto'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Root;
