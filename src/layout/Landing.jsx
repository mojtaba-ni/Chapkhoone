import React from 'react'
import LandingP from '../assets/Landing/LandingPic.png'
import LandingImg from '../assets/Landing/LandImg.png'
import LandingTitle from '../assets/Landing/LandTitle.png'
import {motion} from 'framer-motion'
import { landTitle,landImg,UpAnim } from '../utils/Animation'
import styles from '../styles/layout/landing.module.scss'

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
        <div className={styles.landingWrapper}>
            <img className={styles.landingPic} src={LandingP} alt="" />
            <div className={styles.LandingDetail}>
                <motion.div className={styles.detailImg}
                variants={landImg} initial="hidden" animate="visible">
                    <img src={LandingImg} alt="" />
                </motion.div>
                <motion.div className={styles.detailTitle}
                variants={landTitle} initial="hidden" animate="visible">
                  <img src={LandingTitle} alt="" />
                </motion.div>
            </div>
        </div>
        <div className={styles.landingMobile}>
          <div className={styles.landingMobileWrapper}>
              <motion.div className={styles.landingHeader}
              variants={UpAnim} initial="hidden" animate="visible">
                <img src={LandingTitle} alt="" />
              </motion.div>
              <div className={styles.landingBody}>
                <img src={LandingImg} alt="" />
              </div>
          </div>
        </div>

    </div>
  )
}

export default Landing