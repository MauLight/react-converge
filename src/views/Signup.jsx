import React, { useState } from 'react'
import { Form } from '../components/signup/Form'
import { Title } from '../components/signup/Title'

export const Signup = ({ setErrorType, setErrorMessage }) => {

  //* Form state
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const emailTest = (email) => {
    console.log('this is the password', email)
    return /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  }

  const passwordTest = (p) => {
    console.log('this is the password', p)
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/.test(p)
  }

  //* Submit handler
  const handleSignUp = (e) => {

    e.preventDefault()

    if (username === '' || name === '' || password === '') {
      setErrorType('error')
      setErrorMessage('Please fill all information before submitting.')
      setTimeout(() => setErrorMessage(null), 5000)
      return
    }

    if (!passwordTest(password)) {
      setErrorType('error')
      setErrorMessage('Password must have minimum eight characters, one letter, one number and one special character.')
      setTimeout(() => setErrorMessage(null), 5000)
      return
    }

    if (!emailTest(username)) {
      setErrorType('error')
      setErrorMessage('Please input email address in the correct format.')
      setTimeout(() => setErrorMessage(null), 5000)
      return
    }

    setUsername('')
    setName('')
    setPassword('')
    setErrorType('add')
    setErrorMessage(`Welcome aboard! ${name}`)
    setTimeout(() => setErrorMessage(null), 5000)
  }
  const handleGoogleSignUp = (user) => {

    setUsername('')
    setName('')
    setPassword('')
    setErrorType('add')
    setErrorMessage(`Welcome aboard ${user.name}!`)
    setTimeout(() => setErrorMessage(null), 5000)
  }

  return (
    <div className='flex w-full h-screen'>

      <div className="flex flex-col w-full lg:w-3/4 items-center justify-center pl-[15%] pr-[30%]">


        <Title />

        <Form
          username={username}
          name={name}
          password={password}
          setErrorType={setErrorType}
          setErrorMessage={setErrorMessage}
          setUsername={setUsername}
          setName={setName}
          setPassword={setPassword}
          handleSignUp={handleSignUp}
          handleGoogleSignUp={handleGoogleSignUp}
        />

      </div>
      <div className="w-0 lg:w-1/4 bg-[#1F311D]">
      </div>
    </div>
  )
}
