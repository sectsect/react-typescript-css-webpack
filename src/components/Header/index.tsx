import { useRecoilValue } from 'recoil';
import styles from './index.module.css';
import { nameState } from '@/recoil/atoms/nameAtom';

const Header: React.FC = () => {
  const name = useRecoilValue(nameState);

  return (
    <header className={styles.header}>
      <div className="flex inner justify-between items-baseline">
        <h1 className={styles.heading}>App Component</h1>
        <span className="text-base font-bold">{`Hello ${name}`}</span>
      </div>
    </header>
  );
};

export default Header;
