import React from "react"

import "./ContactPage.css"

const ContactPage= () => {
  const map = 'https://www.google.com/maps/@2.0537083,45.3087742,15z?entry=ttu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
     
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p> km4 Street, deg Hodan MOGADISHO </p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@EduMaterial.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +252617171470</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='20' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}




export default ContactPage