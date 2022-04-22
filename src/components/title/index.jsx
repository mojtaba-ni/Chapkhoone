import React from 'react'
import styles from '../../styles/components/title.module.scss'

export default({line,Main}) => {
  return (
    <div className={styles.titleContainer}>
        <div className={styles.titleBox}>
            <div className={styles.line}>
                <img src={line} alt="line" />
            </div>
            <div className={styles.titleMain}>
                <img src={Main} alt="line" />
            </div>
            <div className={styles.line}>
                <img src={line} alt="line" />
            </div>
        </div>
    </div>
  )
}

