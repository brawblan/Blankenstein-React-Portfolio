import React from 'react'
import './Contact.css'
import TitleFlipSwitch from '../components/TitleFlipSwitch'

function Contact() {
  return (
    <div className="contact-wrapper">
    <TitleFlipSwitch title='Contact Me' />
    <div className="contact-intro-wrapper">

      <form name="contact" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div class="nes-field is-inline">
          <label>Name</label>
          <input type="text" name="name" id="name" class="nes-input is-dark" placeholder="First and Last Name" />
        </div>
        <div class="nes-field is-inline">
          <label>Email</label>
          <input type="email" name="email" id="email" class="nes-input is-dark" placeholder="Email Address" />
        </div>
        <div class="nes-field is-inline">
          <label>Phone</label>
          <input type="number" name="phone" id="phone" class="nes-input is-dark" placeholder="Phone Number" />
        </div>
        <div class="nes-field is-inline">
          <label>Message</label>
          <textarea name="message" id="message" class="nes-textarea" placeholder="Type your message here..."></textarea>
        </div>
        <button className="nes-btn" type="submit">Send Message</button>
      </form>

    </div>
    </div>
  )
}

export default Contact
