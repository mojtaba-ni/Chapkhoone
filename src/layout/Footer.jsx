import React from 'react'
import alert from '../assets/alert.png'
import {motion} from 'framer-motion'
import { landImg } from '../utils/Animation'
import styles from  '../styles/layout/footer.module.scss'

export default () => {
  return (
    <div className={styles.footerFound}>
        <div className={styles.footerContainer}>
          <motion.div className={styles.footerBox}
          variants={landImg} initial="hidden" whileInView="visible" viewport={{once:true}}>
              <div className={styles.footerLi}>
                  <div className={styles.LiHead}>
                    <img src={alert} alt="" />
                    <h3>درباره ما</h3>
                  </div>
                  <p>
                  استفاده از فناوری برای خلق تجربه خوشایند خرید برای مشتریان، توانمندسازی کسب‌وکارهای ایرانی و کمک به گذار آن‌ها به اقتصاد دیجیتال برای دستیابی به بازاری به‌وسعت ایران و خاورمیانه. همچنین رشد شایستگی‌های حرفه‌ای کارکنان مجموعه یکی از ماموریت‌های ماست
                  </p>
              </div>
              <div className={styles.footerLi}>
                  <div className={styles.LiHead}>
                    <img src={alert} alt="" />
                    <h3>راه های ارتباطی</h3>
                  </div>
                  <div className={styles.comunicaateContainer}>
                      <p>آدرس:تهران-خیابان-</p>
                      <p>ایمیل www.Chapkhoone.com</p>
                      <p>شماره: 021-3253284</p>
                  </div>
              </div>
              <div className={styles.footerLi}>
                  <div className={styles.footerLii}>
                    <div className={styles.LiHead}>
                      <img src={alert} alt="" />
                      <h3>خدمات مشتریان</h3>
                    </div>
                    <p>پرسش های متداول</p>
                    <p>رویه های بازگرداندن کالا</p>
                    <p>تماس با ما</p>
                  <p>درباره ما</p>
                  </div>
              </div>
          </motion.div>
      </div>
    </div>
  )
}
