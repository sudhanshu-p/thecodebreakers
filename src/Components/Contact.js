import React from 'react';
import './Contact.css';

export default function contact() {
    return (
        <div className='contact'>
            <h1 className='contact-title'>Contact Us</h1>
            <div className='cards'>
                <div className='card-left'>
                    <h2 className='card-title'>Address: </h2>
                    <p>The CodeBreakers</p>
                    <p>123 Main Street</p>
                    <p>Anytown, USA</p>
                    <h2 className='card-title'>Email: </h2>
                    <a href='mailto:abcdefidgaf@gmail.com'>abcdefidgaf@gmail.com</a>
                    <h2 className='card-title'>Phone: </h2>
                    <p>(123) 456-7890</p>
                </div>

                <div className='card-right'>
                    <form>
                        <h2 className='card-title'>Contact Form</h2>
                        <label>Name:</label>
                        <input type='text' placeholder='Name' />
                        <label>Email:</label>
                        <input type='text' placeholder='Email' />
                        <label>Message:</label>
                        <textarea rows='4' cols='50' placeholder='Message' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}