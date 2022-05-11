import React from 'react'
import alarm from '../../assets/alarm.png'
import {motion} from 'framer-motion'
import { NavsideAnim } from '../../utils/Animation'
import styles from '../../styles/components/navside.module.scss'

export default () => {
  return (
    <div className={styles.navsideContainer}>
        <motion.nav variants={NavsideAnim} initial="hidden" animate="visible">
            <li className={styles.navsideLi}>
                <div className={styles.liDesc}>
                    <h3>صفحه اصلی</h3>
                </div>
            </li>
            <li className={styles.navsideLi}>
                <div className={styles.liDesc}>
                    <img src={alarm} alt="" />
                    <h3>محصولات</h3>
                </div>
            </li>
            <li className={styles.navsideLi}>
                <div className={styles.liDesc}>
                    <h3>لیست قیمت</h3>
                </div>
            </li>
            <li className={styles.navsideLi}>
                <div className={styles.liDesc}>
                    <h3>قالب ها</h3>
                </div>
            </li>
            <li className={styles.navsideLi}>
                <div className={styles.liDesc}>
                    <h3>تماس باما</h3>
                </div>
            </li>
        </motion.nav>
    </div>
  )
}

