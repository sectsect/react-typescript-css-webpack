import styles from './index.module.css';
import { ReactComponent as FacebookIcon } from '@/assets/images/svg/facebook.svg';
import { ReactComponent as InstagramIcon } from '@/assets/images/svg/instagram.svg';
import { ReactComponent as TwitterIcon } from '@/assets/images/svg/twitter.svg';

const Header: React.FC = () => (
  <ul className={styles.list}>
    <li className={styles.listItem}>
      <a href="https://twitter.com/" className={styles.listItemLink}>
        <TwitterIcon className={styles.svg} />
      </a>
    </li>
    <li className={styles.listItem}>
      <a href="https://www.facebook.com/" className={styles.listItemLink}>
        <FacebookIcon className={styles.svg} />
      </a>
    </li>
    <li className={styles.listItem}>
      <a href="http://instagram.com/" className={styles.listItemLink}>
        <InstagramIcon className={styles.svg} />
      </a>
    </li>
  </ul>
);

export default Header;
