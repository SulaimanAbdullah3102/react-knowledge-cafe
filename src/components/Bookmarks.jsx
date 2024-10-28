import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    const {title} = bookmarks;
    return (
        <div  className='bg-slate-300 p-5 m-3 rounded'>
            <h3 className=''>{title}</h3>
        </div>
    );
};

Bookmarks.prototype = {
    bookmarks : PropTypes.object
}


export default Bookmarks;