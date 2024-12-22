import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className='body'>
                <form className="contact-form" action="submit-form.php" method="post">
                    <h2>Contact Us</h2>

                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Your phone number..." required />

                    <label for="gmail">Gmail</label>
                    <input type="email" id="gmail" name="gmail" placeholder="Your Gmail..." required />

                    <label for="location">Location</label>
                    <input type="text" id="location" name="location" placeholder="Your location..." required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact;