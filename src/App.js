/* eslint-disable no-undef */
import React, { useState } from 'react'
import PromisePolyfill from 'promise-polyfill'
import { Signup } from './views/Signup'
import Notification from './components/Notification'
import { Navbar } from './components/Navbar'

if (!window.Promise) {
  window.Promise = PromisePolyfill
}

const App = () => {

  const [errorType, setErrorType] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  return (
    <div className="w-screen h-screen">
      <div className="absolute w-screen top-0">
        <Notification type={errorType} message={errorMessage} />
      </div>
      <Navbar />
      <Signup setErrorType={setErrorType} setErrorMessage={setErrorMessage} />
    </div>
  )
}

export default App