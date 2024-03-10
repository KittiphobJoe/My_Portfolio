import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://img5.pic.in.th/file/secure-sv1/animal-kingdom_27c5571306.jpeg" alt="" />
            <p>Animal Classification</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://img2.pic.in.th/pic/PlantPursuit.png" alt="" />
            <p>PlantPursuit</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio