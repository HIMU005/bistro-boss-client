import { Helmet } from "react-helmet-async";
import Cover from "../Components/Menu/Cover";
import menuImg from '../assets/menu/banner3.jpg'
import useMenu from "../hooks/useMenu";
import desertBg from '../assets/menu/dessert-bg.jpeg';
import pizzaBg from '../assets/menu/pizza-bg.jpg';
import saladBg from '../assets/menu/salad-bg.jpg';
import soupBg from '../assets/menu/soup-bg.jpg';
import SectionTitle from "../Components/SectionTitle";
import MenuCategory from "../Components/Menu/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu" />
            {/* main cover  */}
            <SectionTitle subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"} />
            {/* offered menu  */}
            <MenuCategory items={offered} />
            {/* dessert  */}
            <MenuCategory items={desserts} img={desertBg} title="desert" />
            {/* pizza  */}
            <MenuCategory items={pizza} img={pizzaBg} title="pizza" />
            {/* salad  */}
            <MenuCategory items={salad} img={saladBg} title="salads" />
            {/* soup  */}
            <MenuCategory items={soup} img={soupBg} title="soup" />
        </div>
    );
};

export default Menu;