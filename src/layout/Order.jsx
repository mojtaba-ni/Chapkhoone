import React from 'react'
import lock from '../assets/Order/lock.svg'
import choice from '../assets/Order/choise.svg'
import get from '../assets/Order/get.svg'
import finish from '../assets/Order/finish.svg'
import paid from '../assets/Order/paid.svg'
import { NavsideAnim } from '../utils/Animation'
import {motion} from "framer-motion"
import styles from '../styles/layout/order.module.scss'

const Order = () => {
  return (
    <div className={styles.orderContainer}>
        <motion.div className={styles.orderWrapper}
         variants={NavsideAnim} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <div className={styles.orderLi}>
                <img src={choice} alt="" />
                <p>انتخاب محصول</p>
            </div>
            <div className={styles.orderLi}>
                <img src={lock} alt="" />
                <p>ثبت نام در سایت</p>
            </div>
            <div className={styles.orderLi}>
                <img src={finish} alt="" />
                <p>تکمیل سفارش</p>
            </div>
            <div className={styles.orderLi}>
                <img src={paid} alt="" />
                <p>پرداخت سفارش</p>
            </div>
            <div className={styles.orderLi}>
                <img src={get} alt="" />
                <p>تحویل سفارش</p>
            </div>
        </motion.div>
    </div>
  )
}

export default Order