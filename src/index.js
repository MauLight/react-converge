import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='697542746787-qf7eb64gktphrvh3mv06rekfe9u4a614.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
)