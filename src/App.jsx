import './App.css'
import Blog_sideber from './components/Blog_sideber'
import Blogs from './components/Blogs'
import Header from './components/Header'

function App() {

  return (
    <>
     <Header></Header>
     <div className='container mx-auto md:flex'>
     <Blogs></Blogs>
     <Blog_sideber></Blog_sideber>
     </div>
    
    </>
  )
}

export default App
