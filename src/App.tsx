import { useEffect, useState } from 'react';

import { AxiosError } from 'axios';
import { useSetRecoilState, useResetRecoilState } from 'recoil';

import { Post } from '@/@types/api/post.interface';
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
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const setNameState = useSetRecoilState(nameState);
  const resetNameState = useResetRecoilState(nameState);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (e) {
        const error = e as AxiosError<Post[]>;
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();

    setNameState('sect');

    return () => {
      resetNameState();
    };
  }, [resetNameState, setNameState]);

  return (
    <Layout>
      <section>
        <div className="inner">
          <h1 className="text-3xl font-bold">POSTS</h1>
          <div className="mt-8">
            {isLoading ? (
              <div>Loading</div>
            ) : (
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
