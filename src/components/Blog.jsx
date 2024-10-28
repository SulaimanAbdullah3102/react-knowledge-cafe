import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark}) => {
    const {title,cover,author_name ,author_img,hashtag,posted_date,reading_time} = blog;
    return (
        <div className='mb-5'>
            <img className='w-2/3 mb-8' src={cover} alt={`Cover Image of the title ${title}`}/>
            <div className='flex justify-between mb-5'>
                <div className='flex justify-between items-center gap-6'>
                    <img className='w-16' src={author_img} alt="Image of the author" />
                    <div>
                    <p className='text-2xl'>{author_name}</p>
                    <p className='text-gray-600'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2'> <CiBookmark />
                    </button>

                </div>
            </div>
            <h2 className='text-5xl font-bold mb-4'>{title}</h2>
            {
                hashtag.map((hash,idx) => <span className='text-gray-600 ml-4' key={idx}><a href="">{hash}</a></span>)
            }

        </div>
    );
};
Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func
}
export default Blog;