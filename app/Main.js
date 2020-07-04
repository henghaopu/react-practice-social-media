import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      <h1>App Header</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))

// HMR: load js asynchronously without refreshing the page
if (module.hot) module.hot.accept()
