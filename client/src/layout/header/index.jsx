import React from 'react'
import { NavLink } from 'react-router-dom'
import '../header/index.scss'
import {Helmet} from "react-helmet";
 
const Header = () => {
    
  return (
      <><Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      
      <div className="header">
              <div className='umuminavbar'>
              <div className="yazi">
                  <div className="navbarsag"> <img src='https://preview.colorlib.com/theme/course/images/logo.png'></img><h1>Course</h1> </div>
                 </div>
                <div className="navbarsol">  <ul>
                      <li>
                          <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                          <NavLink to="/wishlist">wishist</NavLink>
                      </li>
                      <li>
                          <NavLink to="/add">add</NavLink>
                      </li>
                  </ul></div>
                  <div className="phone">
                      <i className="fa-solid fa-phone-volume"></i>
                      +43 4566 7788 2457
                  </div>
              </div>

              {/* <div className="shekil">
                  <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" srcset="" />
              </div>

              <div className="backend">
                  <h1>Popular Courses</h1>
              </div> */}


          </div></>
  )
}
export default Header