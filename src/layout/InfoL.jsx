import React from 'react'
import Info from '../components/info'
import infoLandR from '../assets/info/infoLandR.png'
import infoLandG from '../assets/info/infoLandG.png'
import {motion} from 'framer-motion'
import { landImg,landInfo} from '../utils/Animation'
import styles from '../styles/layout/infoL.module.scss'

const InfoL = () => {
  return (
    <div className={styles.InfoLContainer}>
        <div className={styles.InfoBox}>
            <Info/>
        </div>
        <motion.div className={styles.InfoLand}
        variants={landImg} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <div className={styles.InfoLi}>
                <img className={styles.imgR}  src={infoLandR} alt="" />
            </div>
            <div className={styles.InfoLi}>
                <img className={styles.imgG} src={infoLandG} alt="" />
            </div>
        </motion.div>
    </div>
  )
}

export default InfoL