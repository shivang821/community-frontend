import React from 'react'
import BarLoader from "react-spinners/BarLoader";
import EcbImage from '../../../images/HdImage.png'
import './defaultLoader.css'
const DefaultLoader = () => {
  return (
    <div className='defaultLoader'>
        <img src={EcbImage} alt="" />
        <BarLoader speedMultiplier='.8' width={'10rem'} color="#0A66C2"/>
        <div className="bottomLoaderText">
          <p>ECB COMMUNITY</p>
        </div>
    </div>
  )
}

export default DefaultLoader