import React, { useRef, useEffect } from 'react'
import './bottomNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { NavLink, useLocation } from 'react-router-dom';
const BottomNavbar = () => {
    const location = useLocation()
    const problems = useRef(null)
    const home = useRef(null)
    const ask = useRef(null)
    useEffect(() => {
        const pathname=location.pathname;
        if (pathname === '/problems') {
            problems.current.className = 'activeLink'
            home.current.classList.remove('activeLink')
            ask.current.classList.remove('activeLink')
        } else if (pathname === '/') {
            home.current.className = 'activeLink'
            problems.current.classList.remove('activeLink')
            ask.current.classList.remove('activeLink')
        }
        else if (pathname=== '/ask') {
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
    }, [location.pathname])
    return (
        <div className="bottomNavigationLinks">
            <NavLink to='/' sx={{backgroundColor:"transparent"}}>
                <div ref={home}>
                    <HomeIcon />
                    <p >Home</p>
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
                    <p >Ask</p>
                </div>
            </NavLink>
        </div>
    )
}

export default BottomNavbar