import { useRecoilValue } from 'recoil';

import styles from './style.module.css';
import { nameState } from '@/recoil/atoms/nameAtom';

const Header: React.FC = () => {
  const name = useRecoilValue(nameState);

  return (
    <header className={styles.header}>
      <div className="flex justify-between items-baseline inner">
        <h1 className={styles.heading}>My App</h1>
        <span className="text-base font-bold">{`Hello ${name}`}</span>
      </div>
    </header>
  );
};

export default Header;
