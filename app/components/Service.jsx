import React from 'react'
import { UITitle } from './UI/Title'

export const Service = () => {
  const content = [
    {
      title: 'Digital Strategy',
      desc: 'Understand and analyze the target audience to create personalized and relevant digital experiences.',
      img: '/img/sp1.png',
    },
    {
      title: 'Web Design',
      desc: 'Design an intuitive and visually appealing interface that allows users to navigate the website easily.',
      img: '/img/sp2.png',
    },
    {
      title: 'User Experience',
      desc: 'Focus on the needs, preferences, and behaviors of the users throughout the design process.',
      img: '/img/sp3.png',
    },
    {
      title: 'UI Testing',
      desc: 'Ensure that test cases cover both typical and edge cases to identify potential issues.',
      img: '/img/sp4.png',
    },
    {
      title: 'WordPress Solutions',
      desc: 'This is useful for complex websites or those with specific content needs.',
      img: '/img/sp5.png',
    },
    {
      title: 'Mobile Applications',
      desc: 'Navigation, responsiveness, and consistency contribute to a positive user experience.',
      img: '/img/sp6.png',
    },
  ];
  return (
    <div className="p-service-wrapper">
      <div className="p-service-box">
        <UITitle content="My Services" />
        <div className="p-service-block">
          <div className="p-service-list">
            {
              content.map((item, index) => (
                <div className="p-service-item animate" key={'p-service-' + index}>
                  <div className="p-service-iteminner">
                    <img className="p-service-img" data-src={item.img} alt={item.img + 'image'} />
                    <h3 className='p-service-title'>{item.title}</h3>
                    <p className='p-service-desc'>{item.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
