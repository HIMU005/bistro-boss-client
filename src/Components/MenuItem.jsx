import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className='flex space-x-4'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[118px] h-[104px] bg-[#D9D9D9]' src={image} alt="" />
            <div>
                <h3>{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>{price}</p>
        </div>
    );
};

export default MenuItem;

MenuItem.propTypes = {
    item: PropTypes.object,
}