import styles from './navbar.module.css';

import menu from '../../assets/images/icon-menu.svg';
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      <div className={styles.navbarLogo}>
        <img src={logo} alt='News logo' />
      </div>
      <div className={styles.navbarMenu}>
        <img src={menu} alt='Hamburger menu icon' />
      </div>
    </header>
  );
};

export default Navbar;
