import React from 'react';
import "./allContacts.css";
import Contact from '../Contact';
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare, FaDiscord  } from "react-icons/fa";
import { FaViber, FaXTwitter } from "react-icons/fa6";


const MyContacts = () => (
        <div className='my-contacts'>
            <MdEmail className='email-icon' />
            <span>anas.kharboutli@gmail.com</span>
            <FaWhatsappSquare className='whatsapp-icon'/>
            <span>+48 - 534 817 111</span>
            <FaXTwitter className='x-icon' />
            <span>@AnasKharboutli</span>
            <FaViber className='viber-icon' />
            <span>+48 - 534 817 111</span>
            <FaDiscord className='discord-icon' />
            <span>anas_kharboutli</span>
        </div>      
);

const AllContacts = () => {
  return (
    <div className='all-contacts-container'>
      
      <div className='my-contacts-content'>
        <MyContacts />
      </div>

      <div className='all-contacts-form-container'>
      <Contact />
      </div>
    </div>
  )
}

export default AllContacts
