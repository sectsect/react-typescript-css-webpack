import { useEffect } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useSetRecoilState, useResetRecoilState } from 'recoil';

import Layout from '@/components/Layout';
import { nameState } from '@/recoil/atoms/nameAtom';
import { fetchPosts } from '@/utils/requests/post';

// interface MyData {
//   message: string;
// }

// declare global {
//   interface Window {
//     my_data: MyData;
//   }
// }

const App: React.FC = () => {
  const setNameState = useSetRecoilState(nameState);
  const resetNameState = useResetRecoilState(nameState);

  // const { data, isLoading, isError, error } = useQuery(
  const { data, isLoading, error } = useQuery('posts', () => fetchPosts(), {
    // cacheTime: 1000, // Defaults to 5 * 60 * 1000 (5 minutes)
    // staleTime: Infinity,
    // refetchOnWindowFocus: false,
    // retry: false,
    // onError: err =>
    //   toast.error(`Something went wrong: ${(err as Error).message}`),
  });

  useEffect(() => {
    setNameState('sect');

    return () => {
      resetNameState();
    };
  }, [resetNameState, setNameState]);

  useEffect(() => {
    if (error && error instanceof Error) {
      toast.error(`Something went wrong: ${error.message}`);
    }
  }, [error]);

  if (isLoading) {
    return (
      <section>
        <div className="inner">Loading...</div>
      </section>
    );
  }

  const posts = data;

  return (
    <Layout>
      <section>
        <div className="inner">
          <h1 className="text-3xl font-bold">POSTS</h1>
          <div className="mt-8">
            {posts && posts.length > 0 && (
              <ul>
                {posts.map(post => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
      <Toaster />
    </Layout>
  );
};

export default App;
