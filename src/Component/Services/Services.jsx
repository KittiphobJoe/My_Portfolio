import React from 'react'
import styles from './Services.module.css'  
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'


function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Devlopment</h4>
            <p>Website development process steps use programming languages and tools for creating websites. Starting from structuring, designing, developing the website, and taking care of the website system after the website has been created. Including choosing to present information on the website between browsers, various features to get a response from users. Most of those who do online marketing business tend to do Web Development to build more credibility for their business.</p>
        </div>
        <div className={styles.services_items}>
            <FaPaintbrush/>
            <h4>Web Design</h4>
            <p>is to design the external appearance of the website. Various beauty and functional designs designed with the user in mind. The person who designs the website is called a Web Designer. The person who writes the back-end website code to create the desired functionality through the use of computer language.</p>
        </div>
        <div className={styles.services_items}>
            <FaDesktop/>
            <h4>Web Mobile</h4>
            <p>is to develop a website, but the website that is developed will support mobile play easily. Websites that do not fully support the Mobile web Users will have to sit and expand the website. If making a website for the Mobile web, the buttons will be large, the font will be large and it will be arranged for easy use. Can be played with one hand No need to sit and enlarge the screen. That's the Mobile web.</p>
        </div>
      </div>
    </div>
  )
}

export default Services