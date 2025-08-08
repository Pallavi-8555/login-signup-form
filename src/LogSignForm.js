import React, { useState } from 'react'

export default function LogSignForm() {

  const [isLogin, setIsLogin] = useState(true);

  return (

    <div className='container'>
      <div className='form-container'>
        <div className="form-toggle">

          <button className={isLogin ? "active" : " "} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? "active" : " "} onClick={() => setIsLogin(false)}>SignUp</button>

        </div>
        {isLogin ? <>
          <div className="form">
            <h2>Login Form</h2>
            <input type='email' placeholder='enter email' />
            <input type='password' placeholder='enter password' />
            <a href='#'>Forget Password</a>
            <button>Login</button>
            <p>Not a member <a href='#' onClick={() => setIsLogin(false)}>Signup now</a></p>
          </div>


        </> : <>
          <div className="form">

            <h2>Signup Form</h2>
            <input type='email' placeholder='enter email' />
            <input type='password' placeholder='enter password' />
            <input type='password' placeholder='confirm password' />
            <button>Signup</button>
          </div>
        </>
        }

      </div>
    </div>
  )
}

