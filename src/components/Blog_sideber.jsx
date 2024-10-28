
import PropTypes from 'prop-types';
import Bookmarks from './Bookmarks';

const Blog_sideber = ({bookmarks}) => {
    return (
        <div>
            <h1>Bookmarks : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmarks,idx) => <Bookmarks key={idx} bookmarks={bookmarks}></Bookmarks>)
            }
        </div>
    );
};

Blog_sideber.propTypes = {
    bookmarks : PropTypes.array
};

export default Blog_sideber;