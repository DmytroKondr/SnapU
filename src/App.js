import './App.css';
import React, { useState, createContext } from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import i18next from 'i18next';

// i18next.init({
//   lng: 'en',
//   resources: {
//     en: {
//       translation: {
//         "key": "hello world"
//       }
//     },
//     ukr: {
//       translation: {
//         "key": "Привіт світ"
//       }
//     }
//   }
// });



let usdTo = {}

if (localStorage.getItem('Exchange Rate') !== null) {
  usdTo = JSON.parse(localStorage.getItem('Exchange Rate'))

  if (new Date() - (new Date(usdTo.Date)) <= 43200000) {
  }else{
    fetch('https://v6.exchangerate-api.com/v6/f0aae3ccc9293cc22b9fd638/latest/USD')
      .then(responce => { return responce.json() })
      .then(data => {
        usdTo.Date = new Date()
        usdTo.UAH = data.conversion_rates.UAH
        usdTo.EUR = data.conversion_rates.EUR
        localStorage.setItem('Exchange Rate', JSON.stringify(usdTo))
      })
  }
} else {
  fetch('https://v6.exchangerate-api.com/v6/f0aae3ccc9293cc22b9fd638/latest/USD')
    .then(responce => { return responce.json() })
    .then(data => {
      usdTo.Date = new Date()
      usdTo.UAH = data.conversion_rates.UAH
      usdTo.EUR = data.conversion_rates.EUR
      localStorage.setItem('Exchange Rate', JSON.stringify(usdTo))
    })

}



function App() {

  // Changing Content component's content func
  let [page, setPage] = useState(0)
  function changePage(pageNum) {
    if (page !== pageNum) {
      document.querySelector('main').classList.add('disapear')
      document.querySelector('footer').classList.add('disapear')
      setTimeout(() => {
        setPage(pageNum)
        document.querySelector('main').classList.remove('disapear')
        document.querySelector('footer').classList.remove('disapear')
      }, 1000);
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  //
  // Currency chandge

  let [curentCurrency, setCurentCurrency] = useState('USD')
  function chandgeCurrency(cur) {
    setCurentCurrency(cur)
  }

  function getCurrency() {
    return { usdTo: usdTo, curentCurrency: curentCurrency }
  }
  //
  //
  
  const [lan, setLang] = useState('en')

  return <>
    <Header lan={lan} setLang={setLang} chandgeCurrency={chandgeCurrency} changePage={changePage} />
    <Content lan={lan} getCurrency={getCurrency} changePage={changePage} page={page} />
    <Footer />
  </>
}




export default App;