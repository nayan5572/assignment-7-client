import PropTypes from 'prop-types';

const BookMarks = ({totalPrice, hour}) => {
    return (
        <div className="md:w-1/3">
            <div className="bg-white w-[312px] h-[355px] rounded-xl">
                <div className="p-6">
                    <h2 className="text-[18px] font-bold text-center text-[#2F80ED] pt-6 mb-4">Credit Hour Remaining 7 hr</h2>
                    <hr />
                    <h1 className="text-[20px] font-bold mt-4">Course Name</h1>
                    <p>Total Credit Hour: {hour}</p>
                    <p>Total Price: {totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

BookMarks.propTypes = {
    blog: PropTypes.func,
    totalPrice: PropTypes.func,
    hour: PropTypes.func
}

export default BookMarks;