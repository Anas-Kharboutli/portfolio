import React, { useRef, useState } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [ show, setShow ] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_40nx9tn', 'template_z8t9m6z', form.current, {
        publicKey: 'nrPa9G6CepMBNGJh2',
      })
      .then(
        () => {
          setShow(false);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    show ? (
      <div className='contact-container'>
      <h2>Send me a message and let's get connected</h2>

       <form ref={form} onSubmit={sendEmail}>
       <div className='form-container'>

       <div className='input-section'>
        <label htmlFor='name'>
          Your Name | Company
        </label>
        <input type='text' id='name' required name="user_name"/> 
       </div>

       <div className='input-section'>
        <label htmlFor='email'>
          Your Email
        </label>
        <input type='email' id='email' required name="user_email"/> 
       </div>

       <div className='input-section'>
        <label htmlFor='subject'>
          Subject
        </label>
        <input type='text' id='subject' required name='subject'/> 
       </div>

       <div className='input-section'>
        <label htmlFor='message'>
          Your Message To Me
        </label>
        <textarea type='text' id='message' 
        name="message"
        cols={20} rows={4} required/> 
       </div>

      
        <button type='submit' 
                value="Send"
                >Send</button>
       </div>
       </form>  
    </div>
    ) : (
      <div className='reply-message'>
        <h1>I have received your message !</h1>
        <h2>I'll be in touch with you shortly</h2>
      </div>     
    )  
  )
}

export default Contact
