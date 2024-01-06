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
        <ul>
          <li className='menuItem'>Home</li>
          <li className='menuItem'>News</li>
          <li className='menuItem'>Popular</li>
          <li className='menuItem'>Trending</li>
          <li className='menuItem'>Categories</li>
        </ul>
        <img src={menu} alt='Hamburger menu icon' />
      </div>
    </header>
  );
};

export default Navbar;
