import React from 'react'
import LandingP from '../assets/Landing/LandingPic.png'
import LandingImg from '../assets/Landing/LandImg.png'
import LandingTitle from '../assets/Landing/LandTitle.png'
import styles from '../styles/layout/landing.module.scss'

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
        <div className={styles.landingWrapper}>
            <img className={styles.landingPic} src={LandingP} alt="" />
            <div className={styles.LandingDetail}>
                <div className={styles.detailImg}>
                    <img src={LandingImg} alt="" />
                </div>
                <div className={styles.detailTitle}>
                  <img src={LandingTitle} alt="" />
                </div>
            </div>
        </div>
        <div className={styles.landingMobile}>
          <div className={styles.landingMobileWrapper}>
              <div className={styles.landingHeader}>
                <img src={LandingTitle} alt="" />
              </div>
              <div className={styles.landingBody}>
                <img src={LandingImg} alt="" />
              </div>
          </div>
        </div>

    </div>
  )
}

export default Landing