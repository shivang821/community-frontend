import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { CLEAR_ERROR, loginUser } from '../actions/userAction'
import './login.css'
const Login = () => {
  const dispatch=useDispatch()
  const history=useNavigate()
  const {error,isAuthenticate}=useSelector(state=>state.user)
  const [user, setUser] = useState(
    {
      email: "",
      password: ""
    }
  )
  const {email,password}=user
  const submitHandler = (e) => {
      e.preventDefault()
      const myForm=new FormData();
      myForm.set('email',email);
      myForm.set('password',password);
      dispatch(loginUser(myForm))

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((pre) => {
      return { ...pre, [name]: value }
    })
  }
  useEffect(()=>{
    if(error){
      console.log(error);
      dispatch(CLEAR_ERROR())
    }
    if(isAuthenticate)
    {
      history('/',{replace:true})
    }
  },[error,dispatch,isAuthenticate,history])
  return (
    <div className='loginDiv'>
      <div className='loginBrand'><p>ECB COMMUNITY</p></div>
      <form onSubmit={submitHandler}>
        <div className="upperForm">
          <p>Login</p>
        </div>
        <div className="middleForm">
          <div>
            <input type="email" onChange={handleChange} name="email" autoComplete='off' placeholder='Email' />
          </div>
          <div>
            <input type="password" onChange={handleChange} name="password" autoComplete='off' placeholder='Password' />
          </div>
          <button type='submit' className='loginBtn' >Login</button>
        </div>
        <div className="bottmoForm">
          <p>or</p>
          <NavLink to='/auth/signup'>Don't have an account ?</NavLink  >
        </div>
      </form>
    </div>
  )
}

export default Login