import { useState } from 'react'
import './App.css'
import Blog_sideber from './components/Blog_sideber'
import Blogs from './components/Blogs'
import Header from './components/Header'

function App() {
const [bookmarks,setBookmarks] = useState([]);
const [readingtime, setReadingtime] = useState(0)

const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks , blog];
  setBookmarks(newBookmarks);
}

const handleReadingTime = (id,time) => {
  const newReadingTime = readingtime + time;
  setReadingtime(newReadingTime);
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id );
  setBookmarks(remainingBookmarks)
  
}

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmark = {handleAddToBookmark} handleReadingTime ={handleReadingTime}></Blogs>
     <Blog_sideber bookmarks = {bookmarks} readingtime = {readingtime}></Blog_sideber>
     </div>
    
    </>
  )
}

export default App
