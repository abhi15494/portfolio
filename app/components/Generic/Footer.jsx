import React from 'react'

export const Footer = () => {
  const arrowicon = '/img/arrow.png';
  const content = {
    email: 'abhishek15494@gmail.com',
    mobile: '9999047566',
    location: 'Delhi',
    blogs: [
      {
        label: 'Limitless IOT',
        link: 'https://www.c-sharpcorner.com/blogs/limitless-iot'
      },
      {
        label: 'Javascript AJAX',
        link: 'https://www.c-sharpcorner.com/blogs/javascript-arrays-manipulation'
      },
      {
        label: 'Power of Flexbox',
        link: 'https://www.c-sharpcorner.com/article/power-of-flexbox-css/'
      },
      {
        label: '3D art of code',
        link: 'https://www.c-sharpcorner.com/article/3d-art-of-code2/'
      },
    ]
  }

  const handleMovetoTop = () => {
    window.scroll({
      behavior: 'smooth',
      top: 0
    });
  }


  return (
    <footer className='p-footer-wrapper animate'>
      <div className='p-footer-box p-container'>
        <div className="p-footer-movetotop">
          <a className='p-footer-movetotop-content' onClick={handleMovetoTop}>
            Move to Top
          </a>
        </div>

        <div className="p-footer-address-box">
          <h3 className="p-footer-address-cnt"><span>Email: </span>{content.email}</h3>
          <h3 className="p-footer-address-cnt"><span>Mobile: </span>{content.mobile}</h3>
          <h3 className="p-footer-address-cnt"><span>Location: </span>{content.location}</h3>
        </div>

        <div className="p-footer-blog-box">
          <h2 className="p-footer-blog-title">{'My Blogs'}</h2>
          <ul className='p-footer-blog-list'>
            {
              content.blogs.map((item, index) => (
                <li className='p-footer-blog-item' key={'FOOTER_BLOG_ID_' + index}>
                  <a href={item.link} className='p-footer-blog-link' target='_blank'>
                    <span className='p-footer-blog-link-label'>
                    {item.label}
                    </span>
                    <img className='p-footer-blog-link-icon' data-src={arrowicon} alt="Arrow icon" />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </footer>
  )
}
