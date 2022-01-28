import styles from './index.module.css';

const Header: React.VFC = () => (
  <header className={styles.header}>
    <div className="inner">
      <h1 className={styles.heading}>App Component</h1>
    </div>
  </header>
);

export default Header;
