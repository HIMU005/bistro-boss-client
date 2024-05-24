import FoodCard from "../FoodCard";
import PropTypes from 'prop-types';

const OrderTab = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)}
        </div>
    );
};

export default OrderTab;
OrderTab.propTypes = {
    items: PropTypes.array,
}