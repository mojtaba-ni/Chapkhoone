import React from 'react'
import Paper from '@material-ui/core/Paper';
import product1Icon from '../../assets/Product/product1.png'
import styles from '../../styles/components/card.module.scss'

export default ({img,title}) => {
  const width = window.outerWidth
  return (
    <Paper className={`${styles.cardContainer} ${`width:${width}`}`}>
        <div className={styles.cardBox}>
            <div className={styles.cardImg}>
                <img src={img} alt="product" />
            </div>
            <div className={styles.cardDesc}>
                <h4>{title}</h4>
            </div>
        </div>
    </Paper>
  )
}

export const Subject =({title}) => {
  return (
    <div className={styles.subjectContainer}>
        <p>{title}</p>
    </div>
  )
}