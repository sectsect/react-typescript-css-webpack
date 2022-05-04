import { useEffect, useState } from 'react';

import { useSetRecoilState, useResetRecoilState } from 'recoil';

import Layout from '@/components/Layout';
import { nameState } from '@/recoil/atoms/nameAtom';

interface MyData {
  message: string;
}

interface Users {
  id: number;
  name: string;
  email: string;
  verified: boolean;
}

declare global {
  interface Window {
    my_data: MyData;
  }
}

const App: React.FC = () => {
  const setNameState = useSetRecoilState(nameState);
  const resetNameState = useResetRecoilState(nameState);

  const [users] = useState<Users[]>([
    {
      id: 1,
      name: 'John',
      email: 'john@google.com',
      verified: false,
    },
    {
      id: 2,
      name: 'Jack',
      email: 'jack@google.com',
      verified: true,
    },
    {
      id: 3,
      name: 'James',
      email: 'james@google.com',
      verified: false,
    },
  ]);

  useEffect(() => {
    setNameState('sect');

    return () => {
      resetNameState();
    };
  }, [resetNameState, setNameState]);

  return (
    <Layout>
      <section>
        <div className="inner">
          <h1 className="text-3xl font-bold">{process.env.API_URL}</h1>
          <ul className="user-list">
            {users?.map(user => (
              <li key={user.id} className={user.verified ? 'verified' : ''}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default App;
