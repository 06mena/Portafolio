import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}>
        <ul style={{
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            padding: 0,
        }}>
            <a href='#Principal' style={{color:'#00324b', textDecoration: 'none'  }}>Home /</a>
            <a href='#AboutMe' style={{marginLeft: '3px', color:'#00324b', textDecoration: 'none'}}>About Me /</a>
            <a href='#Skills' style={{marginLeft: '3px', color:'#00324b', textDecoration: 'none'}}>Skills /</a>
            <a href='#Projects' style={{marginLeft: '3px', color:'#00324b', textDecoration: 'none'}}>Projects /</a>
            <a href='#Footer' style={{marginLeft: '3px', color:'#00324b', textDecoration: 'none'}}>Contact</a>

        </ul>
    </div>
  )
}

export default Navbar