import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import styles from './style.module.css';
import { nameState } from '@/recoil/atoms/nameAtom';

const Header: React.FC = () => {
  const name = useRecoilValue(nameState);

  return (
    <header className={styles.header}>
      <div className="inner">
        <div className="flex justify-between items-baseline">
          <h1 className={styles.heading}>My App</h1>
          <span className="text-base font-bold">{`Hello ${name}`}</span>
        </div>
        <nav className="mt-5 font-bold">
          <ul className="flex">
            <li className="ml-5 first:ml-0">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-5 first:ml-0">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
