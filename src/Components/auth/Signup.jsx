import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { CLEAR_ERROR, signup } from '../actions/userAction'
import './login.css'
const Signup = () => {
  const dispatch=useDispatch()
  const {error}=useSelector(state=>state.user)
  const [user, setUser] = useState(
    {
      email: "",
      password: "",
      name:''
    }
  )
  const {email,password,name}=user
  const submitHandler = (e) => {
      e.preventDefault()
      const myForm=new FormData();
      myForm.set('email',email);
      myForm.set('password',password);
      myForm.set('name',name);
      dispatch(signup(myForm))

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((pre) => {
      return { ...pre, [name]: value }
    })
  }
  useEffect(()=>{
    if(error){
      dispatch(CLEAR_ERROR())
    }
  },[error,dispatch])
  return (
    <div className='loginDiv'>
      <div className='loginBrand'><p>ECB COMMUNITY</p></div>
      <form onSubmit={submitHandler}>
        <div className="upperForm">
          <p>Signup</p>
        </div>
        <div className="middleForm">
          <div>
            <input type="text" onChange={handleChange} name="name" placeholder='Name' />
          </div>
          <div>
            <input type="email" onChange={handleChange} name="email" autoComplete='off' placeholder='Email' />
          </div>
          <div>
            <input type="password" onChange={handleChange} name="password" autoComplete='off' placeholder='Password' />
          </div>
          <button type='submit' className='loginBtn' >Signup</button>
        </div>
        <div className="bottmoForm">
          <p>or</p>
          <NavLink to='/auth/login'>Already have an account ?</NavLink  >
        </div>
      </form>
    </div>
  )
}

export default Signup