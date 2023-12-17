import React from 'react'
import { UITitle } from './UI/Title'

export const ProjectsWorked = () => {
  const projectList = [
    {
      title: 'SurePeople',
      link: 'https://surepeople.com/',
      img: '/img/icons/img0.svg'
    },
    {
      title: 'Appsquadz Website',
      link: 'https://www.appsquadz.com/',
      img: '/img/icons/img1.svg'
    },
    {
      title: 'MactecIt Website',
      link: 'https://mactecit.com/',
      img: '/img/icons/img2.svg'
    },
    {
      title: 'Skill Passport Website',
      link: 'https://www.skillspassport.com',
      img: '/img/icons/img3.svg'
    },
    {
      title: 'JLL Website',
      link: 'https://www.jll.com',
      img: '/img/icons/img4.svg'
    },
    {
      title: 'AllianceRX Walgreens',
      link: 'https://www.alliancerxwp.com/',
      img: '/img/icons/img5.svg'
    },
    {
      title: 'Indusind bank',
      link: 'https://www.indusind.com',
      img: '/img/icons/img6.svg'
    },
    {
      title: 'GoIndigo',
      link: 'https://www.goindigo.in/',
      img: '/img/icons/img7.svg'
    },
    {
      title: 'Kangan Edu au',
      link: 'https://www.kangan.edu.au/',
      img: '/img/icons/img8.svg'
    },
    {
      title: 'bendigotafe Edu au',
      link: 'https://www.bendigotafe.edu.au/',
      img: '/img/icons/img9.svg'
    },
  ]

  return (    
    <div className="p-projects-wrapper">
      <div className="p-projects-box">
        <UITitle content="Projects Worked On" />
        <div className='p-projects-listbox'>
          <ul className='p-projects-list'>
            {
              projectList.map((project, index) => (
                <li className='p-projects-item animate'>
                  <a className='p-projects-link' href={project.link} target="_blank">
                    <img className='p-projects-icon' data-src={project.img} alt={project.title + 'img'} />
                    <h3 className='p-projects-title'>{project.title}</h3>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
