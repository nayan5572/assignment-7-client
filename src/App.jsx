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
  // click title bookMark
  const [bookMark, setBookMark] = useState([]);

  const [remaining, setRemain] = useState(0);

  // const [cost, setTotalCost]=useState(0);

  // selected cart click button
  const handleAddToBookMark = book => {

    const myBtn = bookMark.find((myCourse) => myCourse.id == book.id);

    let count = book.credit_hours;
    let itemPrice = book.price;

    if (myBtn) {
      return alert('Already Added');
    }
    else {
      bookMark.forEach((item) => {
        count = count + item.credit_hours;
      });

      // remaining 20 hour
      const totalRemaining = 20 - count;
      setHour(count);
      setRemain(totalRemaining);
      setBookMark([...bookMark, book]);

      // click calculate total price
     const newPrice = totalPrice + itemPrice;
     setTotalPrice(newPrice);
    }
  }


  return (
    <>
      <Header></Header>
      <div className='md:flex mx-12 pt-12'>
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <BookMarks totalPrice={totalPrice} hour={hour} bookMark={bookMark} remaining={remaining}></BookMarks>
      </div>
    </>
  )
}

export default App
