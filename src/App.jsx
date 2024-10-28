import { useState } from 'react'
import './App.css'
import Blog_sideber from './components/Blog_sideber'
import Blogs from './components/Blogs'
import Header from './components/Header'

function App() {
const [bookmarks,setBookmarks] = useState([]);

const handleAddToBookmark = blog =>{
  console.log('bookmark added');
  
}
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmark = {handleAddToBookmark}></Blogs>
     <Blog_sideber></Blog_sideber>
     </div>
    
    </>
  )
}

export default App
