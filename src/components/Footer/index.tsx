import styles from './index.module.css';
import Icons from '@/components/Icons';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="inner">
        <Icons />
        {/* <div className="icons">
          <svg className="icon">
            <use xlinkHref="#icon-facebook" />
          </svg>
          <svg className="icon">
            <use xlinkHref="#icon-twitter" />
          </svg>
          <svg className="icon">
            <use xlinkHref="#icon-youtube" />
          </svg>
          <svg className="icon">
            <use xlinkHref="#icon-instagram" />
          </svg>
          <svg className="icon">
            <use xlinkHref="#icon-line" />
          </svg>
          <svg className="icon">
            <use xlinkHref="#icon-arrow-top" />
          </svg>
          <svg className="icon">
            <use xlinkHref="#icon-search" />
          </svg>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
