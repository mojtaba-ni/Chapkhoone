
import React from 'react'
import OffLand from '../assets/Landing/OffLand.png'
import Card from '../components/card'
import { Subject } from '../components/card'
import styles from '../styles/layout/off.module.scss'

export default () => {
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
                    <Subject title={"کارت ویزیت"}/>  
                  </div>
                </div>
                <div className={styles.offBody}>
                  <div className={styles.bodyLi}>
                    <Card/>
                  </div>
                  <div className={styles.bodyLi}>
                    <Card/>
                  </div>
                  <div className={styles.bodyLi}>
                    <Card/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

