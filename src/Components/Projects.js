import React from 'react';
import Proyecto_1 from './P1.png';
import Proyecto_2 from './P2.png';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  const proyectos = [
    {
      imagen: Proyecto_1,
      nombre: 'Places to visit in the metropolitan area',
      skills: 'HTML, CSS, JavaScript',
      link: 'https://github.com/06mena/travel.github.io',
    },
    {
      imagen: Proyecto_2,
      nombre: 'Asked',
      skills: 'HTML, CSS, JavaScript',
      link: 'https://github.com/06mena/juego',
    },
  ];

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column',
      }}
    >
        
        <div id='Projects' style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            alignContent: 'center', 
            justifyContent: 'center' 
        }}>  
        {proyectos.map((proyecto, index) => (
          <article
            key={index}
            style={{
              width: '34%',
              height: '60vh',
              background: '#F1F0E8',
              margin: '2%',
              display: 'flex',
              alignItems: 'center',
              justifyContent:'center',
              flexDirection: 'column',
              textAlign: 'center',
              borderRadius: '6px',
              padding: 0,
            }}
          >

            <img
              src={proyecto.imagen}
              style={{ width: '100%', height: '100vh', maxWidth: '100%' }}
              alt={proyecto.nombre}
            />
            <h2 style={{
                fontSize: '20px'
            }}>{proyecto.nombre}</h2>
            <p style={{
                fontSize: '17px'
            }}>{proyecto.skills} </p>
            <a
              href={proyecto.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <GitHubIcon style={{ marginRight: '5px' }} /></a>

          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;


