import PropTypes from 'prop-types';
import { BsCurrencyDollar } from 'react-icons/Bs';
import { HiOutlineBookOpen } from 'react-icons/Hi';

const Blog = ({ blog }) => {
    const { cover, title, description, price, credit_hours } = blog;
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={cover} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center">{title}</h2>
                    <p>{description}</p>
                    <div className='flex'>
                        <span className='mr-[12px]'><BsCurrencyDollar /></span>
                        <p>Price: {price}</p>
                        <span className='mr-[12px]'><HiOutlineBookOpen /></span>
                        <p>Credit: {credit_hours}hr</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary w-full bg-[#2F80ED] border-0 text-white hover:bg-[#2F80ED] text-[18px] font-semibold">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;