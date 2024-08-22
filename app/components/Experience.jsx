import React from 'react'
import { UITitle } from './UI/Title'
import { UITimeline } from './UI/Timeline.jsx'

export const Experience = () => {
  const content = [
    {
      title: 'Nexio Global Pvt Ltd',
      subtitle: 'Aug-2016 - Nov-2016',
      desc: 'Started my carrer as a frontend developer and worked in various CMS like Wordpress, Magento, Drupal, Moodle, etc.',
    },
    {
      title: 'Kayra Solutions Pvt Ltd',
      subtitle: 'Dec-2016 - Feb-2018',
      desc: 'In this company, I goes in deep drive to understand the core frontend tech such as HTML, CSS, JS, Figma, GIT, Editing tools and so on to  make various local websites such as thewalkerjeans, yekaysahai etc',
    },
    {
      title: 'Appsquadz',
      subtitle: 'March-2018 - May-2019',
      desc: 'Level up my skills in making their sites more efficient, controllable and robust. This was a one for of satisfaction to see things  working in real life as i started to relate the real world with development code.',
    },
    {
      title: 'MactecIt Solutions',
      subtitle: 'June-2018 - March-2019',
      desc: 'I achieved a lot of accomplishment and experience on various projects such as Skill Passport, MacTax, Ecomm Site and Server Management Basics. I can relate this time as a  next level up in my career.',
    },
    {
      title: 'Ayasya IT Solutions',
      subtitle: 'April-2019 - May-2023',
      desc: 'In this org, worked with a groups of professionals. Everyday was a new challenge. There give my time on a lot of projects such as IndusInd bank, alliancerxwp, GoIndigo, JLL, kangan Edu and much more. Their projects are mostly on AEM and Jahia which are sort of enterprise solutions.',
    },
    {
      title: 'Kayra Solutions Pvt Ltd',
      subtitle: 'May-2023 - Incumbent',
      desc: 'Here, I was working on a product known as SurePeople which is used for Psychological analysis and help anyone to understand his personality, It is based on AngularJS as frontend and Java as backend. All the team members are at their peak and mostly worked remotely.',
    },
  ]

  return (
    
    <div className="p-experience-wrapper">
      <div className="p-experience-box">
        <UITitle content="My Experience" />
        <UITimeline content={content} />
      </div>
    </div>
  )
}
