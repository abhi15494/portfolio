import React from 'react'
import { UITitle } from './UI/Title'
import { UICounter } from './UI/Counter'

export const Aboutus = () => {
  return (
    <div className="p-about-wrapper">
      <div className="p-about-box">
        <UITitle content="About me" />
        <div className="p-about-block">
          <div className="p-about-left">
            <UICounter title="Experience" subtitle="Years" limiter={7} />
            <UICounter title="Projects" subtitle="Accomplished" limiter={10} />
          </div>
          <div className="p-about-right">
            <p className="p-about-content animate">
              Passionate Frontend Developer with 7 years of experience in designing and implementing innovative web applications. Proficient in HTML, CSS, and JavaScript, with a keen eye for detail and a commitment to delivering visually appealing and intuitive user interfaces. Adept at collaborating with cross-functional teams to translate design concepts into responsive and functional code.
              <br />
              <br />
              Proven track record of optimizing website performance and ensuring a seamless user experience across various platforms and browsers. Excited to leverage my technical skills and creativity to contribute to dynamic projects and drive the success of forward-thinking organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
