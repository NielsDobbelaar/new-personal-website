import { APIBlogPost, BlogData } from '@/types/blogTypes';
import api from '@/utils/api/api';
import { AxiosResponse } from 'axios';

const getBlogData = async (): Promise<BlogData | null> => {
  try {
    const response: AxiosResponse<BlogData> = await api.get(
      '/blog-posts?populate=*'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching about me data:', error);
    return null;
  }
};

export const getBlogPost = async (
  documentId: string
): Promise<APIBlogPost | null> => {
  try {
    const response: AxiosResponse<APIBlogPost> = await api.get(
      `/blog-posts/${documentId}?populate=*`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return null;
  }
};

export default getBlogData;
