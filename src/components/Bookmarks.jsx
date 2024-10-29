import PropTypes from 'prop-types';

const Bookmarks = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div  className='bg-slate-300 p-5 m-3 rounded'>
            <h3 className=''>{title}</h3>
        </div>
    );
};

Bookmarks.prototype = {
    bookmark : PropTypes.object
}


export default Bookmarks;