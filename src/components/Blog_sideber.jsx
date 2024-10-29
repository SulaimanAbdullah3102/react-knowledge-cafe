
import PropTypes from 'prop-types';
import Bookmarks from './Bookmarks';

const Blog_sideber = ({bookmarks , readingtime}) => {
    return (
        <div>
            <h1>spent time on read :{readingtime} </h1>
            <h1>Bookmarks : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmarks key={idx} bookmark={bookmark}></Bookmarks>)
            }
        </div>
    );
};

Blog_sideber.propTypes = {
    bookmarks : PropTypes.array,
    readingtime : PropTypes.number
};

export default Blog_sideber;