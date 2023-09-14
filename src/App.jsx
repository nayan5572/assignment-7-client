import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  // is for total price
  const [totalPrice, setTotalPrice] = useState(0);
  // total credit hour
  const [hour, setHour] = useState(0);

  // button is for total price
  const handleTotalPrice = (price, credit_hours) => {
    setTotalPrice(totalPrice + price);
    setHour(hour + credit_hours);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex mx-12 pt-12'>
        <Blogs handleTotalPrice={handleTotalPrice}></Blogs>
        <BookMarks totalPrice={totalPrice} hour={hour}></BookMarks>
      </div>
    </>
  )
}

export default App
