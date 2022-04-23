
import React,{useState} from 'react'
import OffLand from '../assets/Landing/OffLand.png'
import Card from '../components/card'
import { Subject } from '../components/card'
import product1 from '../assets/Product/product1.png'
import product2 from '../assets/Product/product2.png'
import product3 from '../assets/Product/product3.png'
import styles from '../styles/layout/off.module.scss'

export default () => {
  
  const width = window.outerWidth;
  return (
    <div className={styles.offContainer}>
        <div className={styles.offBox}>
            <img className={styles.offImg} src={OffLand} alt="" />
            <div className={styles.offWrapper}>
                <div className={styles.offSubject}>
                  <div className={styles.subjectLi}>
                    <Subject title={"پاکت نامه"}/>  
                  </div>
                  <div className={styles.subjectLi}>
                    <Subject title={"کارت ویزیت"}/>  
                  </div>
                  <div className={styles.subjectLi}>
                    <Subject title={"تقویم رومیزی"}/>  
                  </div>
                </div>
                <div className={styles.offBody}>
                  <div className={styles.bodyLi}>
                    <Card img={product1} title={"لمینت براق"} />
                  </div>
                  <div className={styles.bodyLi}>
                    <Card img={product2} title={"مخملی طلاکوب"} />
                  </div>
                  <div className={styles.bodyLi}>
                    <Card img={product3} title={"لمینت مات"} />
                  </div>
                </div>
            </div>
        </div>
        <div className={styles.offMobile}>
            <div className={styles.offMobileWrapper}>
              <div className={styles.offHeader}>
                <div className={styles.headerLi}>
                  <Subject className={`width:${width}`} title={'پاکت نانه'} />
                </div>
                <div className={styles.headerLi}>
                  <Subject className={`width:${width}`} title={'پاکت نانه'}/>
                </div>
                <div className={styles.headerLi}>
                  <Subject className={`width:${width}`} title={'پاکت نانه'}/>
                </div>
              </div>
              <div className={styles.offBody}>
                  <div className={`width:${width}`}>
                    <Card img={product1} title={"لمینت براق"} />
                  </div>
                  <div className={`width:${width}`}>
                    <Card img={product2} title={"مخملی طلاکوب"} />
                  </div>
                  <div className={`width:${width}`}>
                    <Card img={product3} title={"لمینت مات"} />
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

