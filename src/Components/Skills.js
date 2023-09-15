import React from 'react'
import Foto from './user-profile-icon-free-vector.jpg'
import IconHTML from './HTML.png'
import IconJavaScript from './JavaScript-logo.png'
import IconCSS from './CSS.png'
import IconBootstrap from './Bootstrap.png'
import IconReact from './React.png'
import IconC from './C#.png'
import IconJava from './Java.png'
import IconSQL from './MySQL.png'
import IconNode from './Node.png'
import InconGit from './Git.png'

const Skills = () => {
  return (
    <div id='Skills'>
        <article className='Seccion'>
            <article className='caja'>
                <button style={{
                  border: 'none', 
                  background: 'transparent',
                  margin: '2%',
                  }}><img style={{
                    borderRadius:'100%',
                    }} src={IconHTML}></img><div className='nameSkill'>HTML</div></button>
                <button style={{
                  border: 'none', 
                  background: 'transparent',
                  margin: '2%',
                  }}><img style={{
                    borderRadius:'100%'
                    }} src={IconCSS}></img><div className='nameSkill'>CSS</div></button>
                <button style={{
                  border: 'none', 
                  background: 'transparent',
                  margin: '2%',
                  }}><img style={{
                    borderRadius:'100%'
                    }} src={IconJavaScript}></img><div className='nameSkill'>Java Script</div></button>
                <button style={{
                  border: 'none', 
                  background: 'transparent',
                  margin: '2%',
                  }}><img style={{
                    borderRadius:'100%'
                    }} src={IconBootstrap}></img><div className='nameSkill'>Bootstrap</div></button>
                <button style={{
                  border: 'none', 
                  background: 'transparent',
                  margin: '2%',
                  }}><img style={{
                    borderRadius:'100%'
                    }} src={IconReact}></img><div className='nameSkill'>React</div></button>
                <button style={{
                  border: 'none', 
                  background: 'transparent',
                       margin: '2%',
                  }}><img style={{
                    borderRadius:'100%'
                    }} src={IconC}></img><div className='nameSkill'>C#</div></button>
                <button style={{
                  border: 'none', 
                  background: 'transparent',
                  margin: '2%',
                  }}><img style={{
                    borderRadius:'100%'
                    }} src={IconJava}></img><div className='nameSkill'>Java</div></button>
                <button style={{
                  border: 'none',
                  background: 'transparent',
                  margin: '2%',
                  }}><img style={{
                    borderRadius:'100%'
                    }} src={IconSQL}></img><div className='nameSkill'>My SQL</div></button>
                <button style={{
                  border: 'none',
                  background: 'transparent',
                  margin: '2%',
                  }}><img style={{
                    borderRadius:'100%'
                    }} src={IconNode}></img><div className='nameSkill'>Node</div></button>
                    <button style={{
                  border: 'none',
                  background: 'transparent',
                  margin: '2%',
                  }}><img style={{
                    borderRadius:'100%'
                    }} src={InconGit}></img><div className='nameSkill'>Git</div></button>
            </article>
        </article>

    </div>
  )
}

export default Skills