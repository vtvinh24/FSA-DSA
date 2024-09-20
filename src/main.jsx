import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
// const App = lazy(() => import('./App.jsx'))
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
