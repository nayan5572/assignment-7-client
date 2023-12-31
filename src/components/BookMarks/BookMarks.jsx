import PropTypes from 'prop-types';

const BookMarks = ({ totalPrice, hour, bookMark, remaining }) => {
    return (
        <div className='relative'>
            <div className="md:w-1/3 sticky top-0">
                <div className="bg-white w-[400px] rounded-xl">
                    <div className="p-6">
                        <h2 className="text-[18px] font-bold text-[#2F80ED] pt-6 mb-4">Credit Hour Remaining {remaining} hr</h2>
                        <hr />
                        <h1 className="text-[20px] font-bold mt-4 mb-6">Course Name</h1>
                        <hr />

                        <div className='mt-6 mb-6'>
                            {
                                bookMark.map((bookmark, idx) => <ol key={idx}><li className='my-2'>{idx + 1}. {bookmark.title}</li></ol>)
                            }
                        </div>
                        <hr />

                        <p className='mt-6 mb-6'>Total Credit Hour: {hour}</p>
                        <hr />
                        <p className='mt-6'>Total Price: {totalPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookMarks.propTypes = {
    blog: PropTypes.func,
    totalPrice: PropTypes.func,
    hour: PropTypes.func,
    bookMark: PropTypes.func,
    remaining: PropTypes.func
}

export default BookMarks;