import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App.jsx'

ReactDOM.render(
  <React.StrictMode>
    <div id="modal-container"></div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)