import React, { useRef, useEffect} from 'react'
import './header.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Avatar from '@mui/material/Avatar';
import { NavLink, useLocation } from 'react-router-dom';
import MediaQuery from 'react-responsive'
import { useSelector } from 'react-redux';
const Header = () => {
  const location = useLocation()
  const {user}=useSelector(state=>state.user)
  const problems = useRef(null)
  const home = useRef(null)
  const ask = useRef(null)
  const media = window.matchMedia(`(max-width:425px)`)
  useEffect(() => {
    const pathname = location.pathname;
    setTimeout(() => {
      if (!media.matches) {
        if (pathname === '/problems') {
          problems.current.className = 'activeLink'
          home.current.classList.remove('activeLink')
          ask.current.classList.remove('activeLink')
        } else if (pathname === '/') {
          home.current.className = 'activeLink'
          problems.current.classList.remove('activeLink')
          ask.current.classList.remove('activeLink')
        }
        else if (pathname === '/ask') {
          ask.current.className = 'activeLink'
          problems.current.classList.remove('activeLink')
          home.current.classList.remove('activeLink')
        }
        if(pathname === '/notification' ||pathname==='/profile')
        {
            home.current.classList.remove('activeLink')
            problems.current.classList.remove('activeLink')
            ask.current.classList.remove('activeLink')
        }
      }
    }, 100)

  }, [media.matches, location.pathname])
  return (
    <>
      <div className='header'>
        <div className="brandLogo">
          <NavLink to='/' >
            <h3>ECB COMMUNITY</h3>
          </NavLink>
        </div>
        <MediaQuery minWidth={426}>
          <div className="navigationLinks">
            <NavLink to='/'>
              <div ref={home}>
                <HomeIcon />
                <p>Home</p>
              </div>
            </NavLink>
            <NavLink to='/problems'>
              <div ref={problems}> 
                <QuestionAnswerIcon />
                <p >Problems</p>
              </div>
            </NavLink>
            <NavLink to='/ask'>
              <div ref={ask}>
                <HelpIcon />
                <p>Ask</p>
              </div>
            </NavLink>
          </div>
        </MediaQuery>
        <div className="avatarDiv">
          <NavLink to='/notification'>
            <div className='notificationDiv'>
              <NotificationsIcon />
              <div><p>0</p></div>
            </div>
          </NavLink>
          <NavLink to='/profile' className='profileIcon'>
            <Avatar src={user.avatar?user.avatar.url:""} />
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Header