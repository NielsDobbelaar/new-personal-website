import { Technologies } from '@/types/technologiesTypes';
import api from '@/utils/api/api';
import { AxiosResponse } from 'axios';

const getTechnologiesData = async (): Promise<Technologies | null> => {
  try {
    const response: AxiosResponse<Technologies> = await api.get(
      '/technologies?populate=icon'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching about me data:', error);
    return null;
  }
};

export default getTechnologiesData;
