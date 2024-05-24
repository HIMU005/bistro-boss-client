import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';
import Cover from './Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title} />}
            <div className="grid grid-cols-2 gap-4 my-16">
                {
                    items
                        .map(singleMenu =>
                            <MenuItem key={singleMenu._id} item={singleMenu} />)
                }
            </div>
            <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4 mt-4">Order now</Link>
            {/* <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button> */}
        </div>
    );
};

export default MenuCategory;
MenuCategory.propTypes = {
    items: PropTypes.array,
    img: PropTypes.string,
    title: PropTypes.string,
}