import React from 'react'
import Foto from './user-profile-icon-free-vector.jpg'


const Principal = () => {
  return (
    <div id='Principal'>
      <article className='Seccion1'>
        <article className='principal'>
          <h1>Frontend web <br></br> developer</h1>
          <p>Hi, I'm Ximena Acevedo.</p>
          <p>A possionate frontend web developer <br></br> from colombia</p>
        </article>

        <article>
          <img src={Foto}></img>
        </article>

      </article>
    </div>
  )
}

export default Principal