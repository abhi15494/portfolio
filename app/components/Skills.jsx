import React from 'react'
import { UITitle } from './UI/Title'

export const Skills = () => {
  const content = [
    '/img/html.png',
    '/img/css.png',
    '/img/js.png',
    '/img/bootstrap.png',
    '/img/angular.png',
    '/img/aem.png',
    '/img/git.png',
    '/img/node.png',
    '/img/git.png',
    '/img/mongodb.png',
    '/img/figma.png',
    '/img/typescript.png',
    '/img/wordpress.png',
    '/img/sass.png',
    '/img/jquery.png',
  ];
  return (
    <div className="p-skill-wrapper">
      <div className="p-skill-box">
        <UITitle content="My Skills" />
        <div className="p-skill-box">
          <div className="p-skill-list">
            {
              content.map((item, index) => (
                <div className="p-skill-item animate" key={'p-skill-' + index}>
                  <img className="p-skill-img" data-src={item} alt={item + 'image'} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
