import React from 'react'
import Paper from '@material-ui/core/Paper';
import product1Icon from '../../assets/Product/product1.png'
import styles from '../../styles/components/sliderCard.module.scss'

export default ({title,img}) => {
  return (
    <Paper className={styles.cardContainer}>
        <div className={styles.cardBox}>
            <div className={styles.cardImg}>
                <img src={img} alt="product" />
            </div>
            <div className={styles.cardDesc}>
                <h4>{title}</h4>
            </div>
            <div className={styles.cardFooter}>
                <div>100 عدد</div>
                <div>150000 تومان</div>
            </div>
        </div>
    </Paper>
  )
}

