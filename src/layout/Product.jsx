import React from 'react'
import Sliider from '../components/sliderCenterMode'
import {motion} from 'framer-motion'
import { NavsideAnim } from '../utils/Animation'
import styles from '../styles/layout/product.module.scss'

const Product = () => {
  return (
    <motion.div className={styles.productContainer}
    variants={NavsideAnim} initial="hidden" whileInView="visible" viewport={{once:true}}>
      <Sliider/>
    </motion.div>
  )
}

export default Product