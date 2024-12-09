import AboutMe from '@/types/aboutMeTypes';
import api from '@/utils/api/api';
import { AxiosResponse } from 'axios';

const getAboutMeData = async (): Promise => {
  try {
    const response: AxiosResponse = await api.get('/about-me?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching about me data:', error);
    return null;
  }
};

export default getAboutMeData;
