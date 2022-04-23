import React from 'react'
import Card from '../components/card'
import Sliider from '../components/sliderCenterMode'
import styles from '../styles/layout/product.module.scss'

const Product = () => {
  return (
    <div className={styles.productContainer}>
      <Sliider/>
    </div>
  )
}

export default Product