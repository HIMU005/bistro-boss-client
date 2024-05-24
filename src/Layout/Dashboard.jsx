import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCarts();

    //TODO get isAdmin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 h-full bg-orange-300">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={'/dashboard/adminHome'}>
                                    <FaHome />Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/addItems'}>
                                    <FaUtensils />Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageItems'}>
                                    <FaList /> Manage Itmes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageBookings'}>
                                    <FaBook /> Manage Booking
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/allUsers'}>
                                    <FaUser />All Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/review'}><FaAd />Add a review</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/booking'}><FaList />My list</NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li>
                            </>
                    }
                    {/* shared  nav links  */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;