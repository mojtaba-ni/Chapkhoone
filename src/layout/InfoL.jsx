import React from 'react'
import Info from '../components/info'
import infoLandR from '../assets/info/infoLandR.png'
import infoLandG from '../assets/info/infoLandG.png'
import styles from '../styles/layout/infoL.module.scss'

const InfoL = () => {
  return (
    <div className={styles.InfoLContainer}>
        <div className={styles.InfoBox}>
            <Info/>
        </div>
        <div className={styles.InfoLand}>
            <div className={styles.InfoLi}>
                <img className={styles.imgR}  src={infoLandR} alt="" />
            </div>
            <div className={styles.InfoLi}>
                <img className={styles.imgG} src={infoLandG} alt="" />
            </div>
        </div>
    </div>
  )
}

export default InfoL