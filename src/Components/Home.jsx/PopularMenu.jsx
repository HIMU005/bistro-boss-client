import SectionTitle from "../SectionTitle";
import MenuItem from "../MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionTitle subHeading={'---Check it out---'}
                heading={"FROM OUR MENU"} />

            <div className="grid grid-cols-2 gap-4">
                {
                    popular
                        .map(singleMenu => <MenuItem key={singleMenu._id} item={singleMenu} />)
                }
            </div>
        </section>
    );
};

export default PopularMenu;