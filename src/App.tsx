import { useEffect } from 'react';

// import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { useSetRecoilState, useResetRecoilState } from 'recoil';

// import { Post } from '@/@types/api/post.interface';
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

  useEffect(() => {
    setNameState('sect');

    return () => {
      resetNameState();
    };
  }, [resetNameState, setNameState]);

  const { data, isLoading, isError, error } = useQuery(
    'posts',
    () => fetchPosts(),
    {
      // cacheTime: 1000, // Defaults to 5 * 60 * 1000 (5 minutes)
      // staleTime: Infinity,
      // refetchOnWindowFocus: false,
    },
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!isLoading && !data) {
    return <div>HTTP Error</div>;
  }

  if (isError && error instanceof Error) {
    return <div>Error: {error.message}</div>;
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
    </Layout>
  );
};

export default App;
