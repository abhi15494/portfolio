"use client"
import React, { useState } from 'react'

export const Header = () => {
  const headerContent = {
    left: [
      {
        id: 'NAV_Aboutme',
        label: 'About Me',
        link: 'section_Aboutme',
      },
      {
        id: 'NAV_ProjectsWorked',
        label: 'Projects',
        link: 'section_ProjectsWorked',
      },
      {
        id: 'NAV_Skills',
        label: 'Skills',
        link: 'section_Skills',
      }
    ],
    logo: {
      img: '/img/logo.png'
    },
    right: [
      {
        id: 'NAV_Experience',
        label: 'Experience',
        link: 'section_Experience',
      },
      {
        id: 'NAV_Hobbies',
        label: 'Hobbies',
        link: 'section_Hobbies',
      },
      {
        id: 'NAV_Service',
        label: 'Service',
        link: 'section_Service',
      },
    ],
  }
  const [checked, setchecked] = useState(false);
  const scrollTo = (id) => {
    const $scrollToEle = document.querySelector(id);
    const scrollToPos = $scrollToEle?.offsetTop;
    setchecked(false);
    window.scroll({
      behavior: 'smooth',
      top: scrollToPos - (window.innerWidth < 800 ? 30 : 75)
    });
  };

  return (
    <header className="p-header-wrapper">
      <div className='p-header-box p-container'>
        <div className="p-header-nav-logobox">
          <img className='p-header-nav-logo' src={headerContent.logo.img} alt="banner-image" />
        </div>

        <input type="checkbox" checked={checked} onChange={e => setchecked(!!e.target.checked)} className="p-header-nav-burger-checkbox" id="" />
        <div className="p-header-nav-burger">
          <label className="p-header-nav-burger">
          </label>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <nav className="p-header-nav-left">
          <ul className='p-header-nav-list'>
            {
              headerContent.left.map((item, index) => (
                <li className="p-header-nav-item" key={item.id}>
                  <a onClick={e => scrollTo("#" + item.link)} className="p-header-nav-link">{item.label}</a>
                </li>
              ))
            }
          </ul>
        </nav>

        <nav className="p-header-nav-right">
          <ul className='p-header-nav-list'>
            {
              headerContent.right.map((item, index) => (
                <li className="p-header-nav-item" key={item.id}>
                  <a onClick={e => scrollTo("#" + item.link)} className="p-header-nav-link">{item.label}</a>
                </li>
              ))
            }
          </ul>
        </nav>

      </div>
    </header>
  )
}
