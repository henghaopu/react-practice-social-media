import React from 'react'
import ReactDOM from 'react-dom'
// Our components
import Header from './components/Header'
import HomeGuest from './components/HomeGuest'
import Footer from './components/Footer'

function Main() {
  return (
    <React.Fragment>
      <Header />
      <HomeGuest />
      <Footer />
    </React.Fragment>
  )
}

ReactDOM.render(<Main />, document.querySelector('#app'))

// HMR: load js asynchronously without refreshing the page
if (module.hot) module.hot.accept()
