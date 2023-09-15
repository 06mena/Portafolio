import React from 'react'
import Foto from './user-profile-icon-free-vector.jpg'

const AboutMe = () => {
  return (
    <div id='AboutMe'>
      <article className='Seccion1'>
        <article>
          <img src={Foto}></img>
        </article>
        <article className='aboutme'>
          <p>Hi, I'm Ximena, a enthusiast web developer of medellin with 18 years old. I especially enjoy working on the fronted of websites, creating engaging user experiences. <br></br> <br></br>
          While I´m comfortable in both the backend and frontend, i know i still have a lot to learn and improve. I´m excited for the opportunity to continue to groe in this exciting field. <br></br>
          <br></br>
          When I´m not programming, i´m listening to music or dance. If you have a project or just want to talk about web developement, I´d be happy to hear from you! 
          </p>
        </article>
      </article>
    </div>
  )
}

export default AboutMe