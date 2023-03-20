import './App.css'
import React, { Suspense, useEffect } from 'react';
import Home from './Components/Home/Home.jsx'
import Problems from './Components/problems/Problems.jsx'
import MediaQuery from 'react-responsive'
import DefaultLoader from './Components/loaders/defaultLoader/DefaultLoader';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Components/actions/userAction';
import Signup from './Components/auth/Signup';
import Profile from './Components/Profile/Profile';
const BottomNavbar = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/Header/BottomNavbar')), 3000);
  })
})
const Header = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/Header/Header')), 3000);
  })
})
const Login = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/auth/Login')), 3000);
  })
})
function App() {
  const dispatch=useDispatch()
  const location=useLocation()
  const history=useNavigate()
  const { isAuthenticate } = useSelector(state => state.user)
  useEffect(()=>{
    dispatch(loadUser())
    if(isAuthenticate&&(location.pathname==='/auth/login'||location.pathname==='/auth/signup'))
    {
      history('/',{replace:true})
    }
    console.log("isAuthenticate",isAuthenticate);
  },[dispatch,isAuthenticate,history,location])
  return (
    <div className="App">
      <Suspense fallback={<DefaultLoader />}>
        {isAuthenticate ?
          <>
            <Header />
            <div className='mainApp'>
              <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/problems' element={ <Problems />} />
                <Route path='/profile' element={<Profile/>}/>
              </Routes>
            </div>
            <MediaQuery maxWidth={425}>
              <BottomNavbar />
            </MediaQuery>
          </>
          :
          <>
          <Routes>
            <Route path='/' element={<Navigate to='/auth/login'/>}/>
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/signup' element={<Signup />} />
          </Routes>
          </>
        }
      </Suspense>
    </div>
  );
}

export default App;
