import {CONTACT} from '../constants'
import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
const Contacts = () => {
    return(
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
            className="my-10 text-center text-4xl">Get in Touch</motion.h1>
            <div className="text-center tracking-tighter ">
                <motion.p 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className="my-4">{CONTACT.address}</motion.p>
                <motion.p 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}} className='my-4'>{CONTACT.phoneNo}</motion.p>
                <a href="#" className='b0rder-b'>{CONTACT.email}</a>

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
        </div>
    )
}

export default  Contacts