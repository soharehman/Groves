// src/components/Header/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container, MenuItem, Select, Button } from '@mui/material';
import styles from './Header.module.css';
import './Header.scss';

import logo from '../../assets/images/PHOTO-2021-06-16-18-42-19_copy_2@2x.png';
import icon1 from '../../assets/images/icons/Group 17218.png';
import icon2 from '../../assets/images/icons/Group 17098.png';
import icon3 from '../../assets/images/icons/Group 17222.png';
import icon4 from '../../assets/images/icons/Group 17220.png';

const Header = () => {
  return (
    <AppBar position="fixed" className={styles.transparentHeader} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar className={styles.firstRow}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>
          <div className={styles.headerIcons}>
            <img src={icon1} alt="Icon 1" className={styles.icon} />
            <img src={icon2} alt="Icon 2" className={styles.icon} />
            <img src={icon3} alt="Icon 3" className={styles.icon} />
            <img src={icon4} alt="Icon 4" className={styles.icon} />
            <Select
              defaultValue="en"
              className={styles.languageDropdown}
              disableUnderline
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="fr">FR</MenuItem>
              <MenuItem value="es">ES</MenuItem>
            </Select>
            <Button variant="contained" className={styles.headerButton}>
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </Container>
      <Toolbar className={styles.secondRow}>
        <Typography variant="body1" className={styles.menuItem}>dine with us</Typography>
        <Typography variant="body1" className={styles.menuItem}>plan your visit</Typography>
        <Typography variant="body1" className={styles.menuItem}>events</Typography>
        <Typography variant="body1" className={styles.menuItem}>view groves map</Typography>
        <Typography variant="body1" className={styles.menuItem}>our story</Typography>
        <Typography variant="body1" className={styles.menuItem}>contact us</Typography>
    
      </Toolbar>
    </AppBar>
  );
};

export default Header;
