import './App.css';
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';




function App() {

  // Changing Content component's content func
  let [page, setPage] = useState(0)
  function changePage(pageNum) {
    if(page !== pageNum) {
      document.querySelector('content').classList.add('disapear')
      document.querySelector('footer').classList.add('disapear')
      setTimeout(() => {
        setPage(pageNum)
        document.querySelector('content').classList.remove('disapear')
        document.querySelector('footer').classList.remove('disapear')
      }, 1000);
    }
  }
  //

  
  
  return <>
    <Header changePage={changePage} />
    <Content page={page} />
    <Footer />
  </> 
}




export default App;