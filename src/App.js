/* eslint-disable no-undef */
import React from 'react'
import PromisePolyfill from 'promise-polyfill'
import { Signup } from './views/Signup'

if (!window.Promise) {
  window.Promise = PromisePolyfill
}

const App = () => {

  return (
    <div className="w-screen h-screen">
      <Signup />
    </div>
  )
}

export default App