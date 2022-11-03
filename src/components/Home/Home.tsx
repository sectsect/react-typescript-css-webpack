import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';

import { fetchPosts } from '@/utils/requests/post';

const Home: React.FC = () => {
  // const { data, isLoading, isError, error } = useQuery(
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery(['posts'], () => fetchPosts(), {
    // cacheTime: 1000, // Defaults to 5 * 60 * 1000 (5 minutes)
    // staleTime: Infinity,
    // refetchOnWindowFocus: false,
    // retry: false,
    // onError: err =>
    //   toast.error(`Something went wrong: ${(err as Error).message}`),
  });

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

  return (
    <>
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
    </>
  );
};

export default Home;
