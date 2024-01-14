import styles from './mobileMenu.module.css';

import iconMenuClose from '../../assets/images/icon-menu-close.svg';

const MobileMenu = () => {
  return (
    <div className={styles.mobileMenuOverlay}>
      <div className={styles.mobileMenuContainer}>
        <div className={styles.mobileMenuClose}>
          <img src={iconMenuClose} alt='Close menu' />
        </div>
        <div className={styles.mobileMenu}>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
