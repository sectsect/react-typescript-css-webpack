import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useSetRecoilState, useResetRecoilState } from 'recoil';

import About from './components/About/About';
import { nameState } from './recoil/atoms/nameAtom';
import Home from '@/components/Home/Home';
import Layout from '@/components/Layout/Layout';

const App: React.FC = () => {
  const setNameState = useSetRecoilState(nameState);
  const resetNameState = useResetRecoilState(nameState);

  useEffect(() => {
    setNameState('sect');

    return () => {
      resetNameState();
    };
  }, [setNameState, resetNameState]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Layout>
  );
};

export default App;
