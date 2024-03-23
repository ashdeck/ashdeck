import React from 'react'
import ReactDOM from 'react-dom/client'
import '@assets/css/globals.css'
import { Routes } from '@generouted/react-router'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
