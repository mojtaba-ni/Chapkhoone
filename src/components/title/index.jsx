import React from 'react'
import {motion} from 'framer-motion'
import { UpAnim} from '../../utils/Animation'
import styles from '../../styles/components/title.module.scss'

export default({line,Main}) => {
  return (
    <div className={styles.titleContainer}>
        <motion.div className={styles.titleBox}
        variants={UpAnim} initial="hidden" whileInView="visible" >
            <div className={styles.line}>
                <img src={line} alt="line" />
            </div>
            <div className={styles.titleMain}>
                <img src={Main} alt="line" />
            </div>
            <div className={styles.line}>
                <img src={line} alt="line" />
            </div>
        </motion.div>
    </div>
  )
}

