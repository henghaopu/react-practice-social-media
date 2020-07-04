import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Our components
import Header from './components/Header'
import HomeGuest from './components/HomeGuest'
import About from './components/About'
import Terms from './components/Terms'
import Footer from './components/Footer'

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <HomeGuest />
        </Route>
        <Route path='/about-us' exact>
          <About />
        </Route>
        <Route path='/terms' exact>
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.querySelector('#app'))

// HMR: load js asynchronously without refreshing the page
if (module.hot) module.hot.accept()
