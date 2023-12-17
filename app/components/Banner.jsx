import React from 'react';


export const Banner = () => {
  const url = '/img/bannerImg.png';
  const doturl = '/img/dotbot.png';
  
  return (
    <div className='p-banner-wrapper'>
      <div className='p-banner-box'>
        <div className='p-banner-img-box'>
          <img className='p-banner-img-ele' data-src={url} alt="banner-image" />
          <div className='p-banner-img-layer'></div>
        </div>
        <div className='p-banner-cnt-box'>
          <img className='p-banner-cnt-img animate' data-src={doturl} alt="banner-image" />
          <h1 className='p-banner-cnt-title animate'>Abhishek</h1>
          <h3 className='p-banner-cnt-desc animate'>Welcome to my Portfolio</h3>
          <a className='p-banner-cnt-link p-btn animate'>Download CV</a>
        </div>
      </div>
    </div>
  )
}
