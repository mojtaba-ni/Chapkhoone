import React from 'react'
import alert from '../assets/alert.png'
import styles from  '../styles/layout/footer.module.scss'

export default () => {
  return (
    <div className={styles.footerFound}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBox}>
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
                      <p>ایمیل www.onlineshop.com</p>
                      <p>شماره: 021-3253284</p>
                  </div>
              </div>
              <div className={styles.footerLi}>
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
          <div className={styles.contactBox}>
              <div className={styles.contactLi}>
                  ww
              </div>
              <div className={styles.contactLi}>
                ss
              </div>
              <div className={styles.contactLi}>
                  aa
              </div>
          </div>
        
      </div>
    </div>
  )
}
