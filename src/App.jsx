import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto pt-12'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
     </div>
    </>
  )
}

export default App
