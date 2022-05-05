import axios, { AxiosResponse } from 'axios';

import { Post } from '@/@types/api/post.interface';

const endpoint = process.env.API_URL ?? '';

/**
 * Fetch posts from the API
 *
 * @param  route - The route to fetch
 *
 * @remarks
 *
 * Request URL: `https://jsonplaceholder.typicode.com/posts`
 *
 * @returns Promise
 */
export const fetchPosts = async (route = 'posts'): Promise<Post[]> => {
  return axios
    .get(`${endpoint}/${route}`)
    .then((response: AxiosResponse<Post[]>) => {
      if (response.status === 200 && response.data) {
        const { data } = response;
        return data;
      }
      throw new Error(`HTTP Error: ${response.status}`);
    });
};
