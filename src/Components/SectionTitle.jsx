import PropTypes from 'prop-types';
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='mx-auto w-1/4 my-8'>
            <p className='text-[#D99904] mb-2 text-center text-xl'>{subHeading}</p>
            <h3 className='text-[#151515] text-center text-4xl border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;
SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}