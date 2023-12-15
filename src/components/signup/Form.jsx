import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const SignButtons = ({ googleLogin }) => {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <button
        onClick={googleLogin}
        className='flex gap-x-5 justify-center items-center h-[6.5vh] font-bold text-[#000000] p-2 bg-white border border-[#87FF4F] w-full uppercase hover:text-white hover:bg-[#4285F4] hover:border-[#4285F4] active:bg-white active:text-black transition-color duration-200'
      >
        <i className="fa-brands fa-google"></i>
                Sign up with google
      </button>
      <button
        className='flex gap-x-5 justify-center items-center h-[6.5vh] text-white p-2 bg-[#1F311D] w-full uppercase'
      >
        <i className="fa-brands fa-apple"></i>
                Sign up with apple
      </button>
    </div>
  )
}

export const Form = ({
  username,
  name,
  password,
  setErrorType,
  setErrorMessage,
  setUsername,
  setName,
  setPassword,
  handleSignUp,
  handleGoogleSignUp
}) => {

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${res.access_token}`, {
        hesders: {
          Authorization: `Bearer ${res.access_token}`,
          Accept: 'application/json'
        }
      })
        .then((res) => {
          console.log('This is the googleUser info:', res.data)
          handleGoogleSignUp(res.data)
        })
        .catch((error) => console.log(error))
    },
    onError: (error) => {
      setErrorType('error')
      setErrorMessage('Login failed:', error)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  })

  return (
    <>
      <form className='flex flex-col gap-y-5 w-full mb-5 mt-10'>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col">
            <label htmlFor='username' className='text-sm uppercase text-[#87FF4F] font-bold'>Email or username</label>
            <input
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              type='email'
              placeholder='futurelabs@gmail.com'
              className='h-20 lg:h-10 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]'

            />
          </div>
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
            type='text'
            placeholder='Name'
            className='h-20 lg:h-10 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]'
          />
          <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type='password'
            placeholder='Password'
            className='h-20 lg:h-10 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]'
          />
        </div>
        <button
          onClick={handleSignUp}
          className='h-[6.5vh] font-bold text-white p-2 mt-20 lg:mt-5 bg-[#87FF4F] hover:text-black hover:bg-white hover:border border-[#87FF4F] active:bg-[#87FF4F] active:text-white transition-color duration-200 w-full uppercase'>
                    Sign up
        </button>

      </form>
      <SignButtons googleLogin={googleLogin} />
      <p className='text-start w-full text-sm text-[#000000] pt-5'>
        {'Already have an account? '}
        <a className='text-sm uppercase text-[#87FF4F] font-bold' href='/'>login</a>
      </p>
    </>
  )
}
