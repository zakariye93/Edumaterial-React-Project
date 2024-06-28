import React from 'react'
import step1Image from './images1/6.jpg';
import step2Image from './images1/7.jpg';
import step3Image from './images1/8.jpg';

function Customer() {
  return (
    <section className="how-it-works">
        <h1>what our  <span className="highlight">customer</span> says</h1>
        <div className="steps">
          <div className="step">
            <img src={step1Image} alt="Step 1" />
            <h5 className="text-xl font-semibold text-black-800 text-left mb-5">Juweria Dahir Abdirahman</h5>
            <p>“I stumbled upon EduMaterial Hub while preparing for my university exams. <br />
            The detailed and meticulously organized study guides, practice tests,<br /> and video tutorials helped me grasp complex concepts with ease.
            <br /> Thanks to EduMaterial Hub, I aced my exams! 
              <br />I highly recommend their services to any student looking for an extra edge in their studies.” </p>
          </div>
          <div className="step">
            <img src={step2Image} alt="Step 2" />
            <h5 className="text-xl font-semibold text-black-800 text-left mb-5">Samiya Yonis Ahmed</h5>
            <p>“I stumbled upon EduMaterial Hub while preparing for my university exams. <br />
            The detailed and meticulously organized study guides, practice tests, and video tutorials helped me grasp complex concepts with ease. <br />
             Thanks to EduMaterial Hub, I aced my exams! <br />
            I highly recommend their services to any student looking for an extra edge in their studies.” </p>
          </div>
          <div className="step">
            <img src={step3Image} alt="Step 3" />
            <h5 className="text-xl font-semibold text-black-800 text-left mb-5">Sirad Mohamud Adan</h5>
            <p>“I stumbled upon EduMaterial Hub while preparing for my university exams. <br />
            The detailed and meticulously organized study guides, practice tests, and video tutorials helped me grasp complex concepts with ease. <br />
             Thanks to EduMaterial Hub, I aced my exams! <br />
            I highly recommend their services to any student looking for an extra edge in their studies.” </p>
          </div>
        </div>
      </section>
  )
}

export default Customer