import { Helmet } from "react-helmet-async";
import Banner from "../../../Components/Home.jsx/Banner";
import Category from "../../../Components/Home.jsx/Category";
import Featured from "../../../Components/Home.jsx/Featured/Featured";
import PopularMenu from "../../../Components/Home.jsx/PopularMenu";
import Testimonials from "../../../Components/Home.jsx/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;