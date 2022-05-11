import React from 'react'
import info1 from '../../assets/info/info1.svg'
import info2 from '../../assets/info/info2.svg'
import info3 from '../../assets/info/info3.svg'
import info4 from '../../assets/info/info4.svg'
import {motion} from 'framer-motion'
import { InfoAnim} from '../../utils/Animation'
import styles from '..//../styles/components/info.module.scss'

export default () => {
  return (
    <motion.div className={styles.infoContainer} 
     variants={InfoAnim} initial="hidden" animate="visible">
        <div className={styles.infoLi}>
            <img src={info1} alt="" />
            <div className={styles.infoDesc}>
                <h3>ارسال به سراسر ایران</h3>
                <p>تحویل محصول درب منزل</p>
            </div>
        </div>
        <div className={styles.infoLi}>
            <img src={info2} alt="" />
            <div className={styles.infoDesc}>
                <h3>از کارخانه به خانه</h3>
                <p>خرید مستقیم از کارخانه</p>
            </div>
        </div>
        <div className={styles.infoLi}>
            <img src={info3} alt="" />
            <div className={styles.infoDesc}>
                <h3>انتخاب پارچه و رنگ</h3>
                <p>تنوع انتخاب در رنگ و پارچه</p>
            </div>
        </div>
        <div className={styles.infoLi}>
            <img src={info4} alt="" />
            <div className={styles.infoDesc}>
                <h3>کیفیت مناسب</h3>
                <p>محصولات تولید کارخانه</p>
            </div>
        </div>
    </motion.div>
  )
}

