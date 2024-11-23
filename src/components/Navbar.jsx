import React from 'react'
import logo from '../assets/Preview.png'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'

const Navbar = () => {
  return <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="logo" />
    </div>
<div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <a href="https:www.linkedin.com/in/ossyemeruwa"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600">< FaLinkedin/></a>

    <a href="https://github.com/Ossy-em"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600"><FaGithub/></a>
    
    <a href="https://x.com/ossyReactdev"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600"><FaSquareXTwitter/></a>
    

    <a href="https://www.instagram.com/ossy.em/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600"><FaInstagram/></a>
    
</div>

  </nav>
   
}

export default Navbar
