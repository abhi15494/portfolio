import React from 'react'
import { UITitle } from './UI/Title'

export const Hobbies = () => {
  const content = [
    '/img/play1.png',
    '/img/play2.png',
    '/img/play3.png',
    '/img/play4.png',
    '/img/play5.png',
    '/img/play6.png',
  ];
  return (
    <div className="p-hobbies-wrapper">
      <div className="p-hobbies-box">
        <UITitle content="My Hobbies" />
        <div className="p-hobbies-block">
          <div className="p-hobbies-list">
            {
              content.map((item, index) => (
                <div className="p-hobbies-item animate" key={'p-hobbies-' + index}>
                  <img className="p-hobbies-img" data-src={item} alt={item + 'image'} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
