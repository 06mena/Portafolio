import React from 'react';
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer = () => {
  return (
    <div id='Footer' style={{ 
        backgroundColor: '#D0BFFF', 
        color: '#fff', 
        padding: '20px', 
        textAlign: 'center',
        boxShadow: '5px 5px 10px 2px rgba(0, 0, 0, 0.5)', 
        }}>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <p style={{
            fontSize: '18px',
            textDecoration: 'underline',
            color: 'black'
        }}> Contact </p>
        <p style={{
          color: 'black'
        }}>If you are interested in hiring me, call me, email me or <br></br> connect and chat with me. </p>
        <a
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}
        >
            <PhoneIcon/> +57 3052200938
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}
        >
            <EmailIcon/> ximenaacevedo4a@gmail.com
        </a>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin: '2%'
        }}>
            <a
              href='https://www.instagram.com/0.__.vx/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}
            >
              <InstagramIcon/>
            </a>
            <a
              href='https://github.com/06mena'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}
            >
              <GitHubIcon/>
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100016981959150&mibextid=ZbWKwL '
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}
            >
              <FacebookIcon/>
            </a>

        </div>
        
        
      
    </div>
  );
};

export default Footer;
