import { useState } from 'react'
import './App.css'
import Blog_sideber from './components/Blog_sideber'
import Blogs from './components/Blogs'
import Header from './components/Header'

function App() {
const [bookmarks,setBookmarks] = useState([]);

const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks , blog];
  setBookmarks(newBookmarks);
}
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmark = {handleAddToBookmark}></Blogs>
     <Blog_sideber bookmarks = {bookmarks}></Blog_sideber>
     </div>
    
    </>
  )
}

export default App
