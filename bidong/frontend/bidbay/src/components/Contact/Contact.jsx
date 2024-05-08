import React from 'react'
import './Contact.css'
import logo from '../../assets/logo.gif'
import mailicon from "../../assets/mailicon.svg"
import phone from '../../assets/phone.svg'
const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <img src={logo} alt=''/>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>WELCOME</h1>
                <p>Get in touch</p>
                <div className='contact-details'>
                <div className='contact-detail'>
                    <img src={mailicon} alt=''/><p>bidbay369@gmail.com</p>
                </div>
                <div className='contact-detail'>
                    <img src={phone} alt=''/><p>+216 50 021 071</p>
                </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter you name' name='name'/>
                <label htmlFor="Your Email">Your Email</label>
                <input type="email" placeholder='Enter you email' name='email' />
                <label htmlFor=''>Write you msg here</label>
                <textarea name='message' rows='8' placeholder='Enter your message'/>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact