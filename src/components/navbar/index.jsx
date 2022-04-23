import React from 'react'
import searchIcon from '../../assets/navbar/search.svg'
import LogoLand from '../../assets/navbar/print.svg'
import buyIcon from '../../assets/navbar/buy.svg'
import personIcon from '../../assets/navbar/person.svg'
import Drawer from '../drawer'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 
import styles from '../../styles/components/navbar.module.scss'

export default ({menu}) => {
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarBox}>
            <div className={styles.navbarLogoM}>
                <div className={styles.logoWrapper}>
                    <div className={styles.imgMenu}>
                        <Drawer menu={menu}/>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img src={LogoLand} alt="" />
                    </div>
                    <div className={styles.desc}>
                        <h4>چاپخونه</h4>
                        <p>www.<b>Charkhoone</b>.com</p>
                    </div>
                </div>
            </div>
            <div className={styles.navbarSearch}>
                <div className={styles.searchBox}>
                    <input type="text"  placeholder='جستجو ...'/>
                    <i className={styles.searchIconBg}><img src={searchIcon} alt="" /></i>
                </div>
            </div>
            <div className={styles.navbarSign}>
                <div className={styles.signWrapper}>
                    <img src={personIcon} alt="" />
                    <div className={styles.signTitle}>
                        <p>ورود / ثبت نام</p>
                    </div>
                </div>
            </div>
            <div className={styles.navbarIcons}>
                <div className={styles.imgWrapper}>
                    <img src={LogoLand} alt="" />
                </div>
                <div className={styles.iconWrapperShop}>
                    <ShoppingCartIcon/>
                </div>
                <div className={styles.iconWrapperSearch}>
                    <SearchIcon/>
                </div>
                <div className={styles.iconWrapperM}>
                    <PersonIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

 