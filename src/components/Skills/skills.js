import React from 'react'
import './skills.css'
import Cloud from '../../assets/Cloud.jpg'
import WebDesign from '../../assets/WebDesign.jpg'
import DS from '../../assets/DS.jpg'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>A creative, responsible, and self-driven individual who enjoys working with
and being a part of a challenging team that works to improve the
organization's growth.</span>
        <div className='skillBars'>
        <div className='skillBar'>
                <img src={Cloud} alt='Devops' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Devops engineer</h2>
                    <p>docker, kubernites, aws, azure related</p>
                </div>
            </div>


            <div className='skillBar'>
                <img src={Cloud} alt='Cloud' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Cloud Computing</h2>
                    <p>related To AWS and Azure cloud computing</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WebSite Design</h2>
                    <p>React website designing</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={DS} alt='DS' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Data Science</h2>
                    <p>Information technology degree specialized in Data science</p>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Skills
