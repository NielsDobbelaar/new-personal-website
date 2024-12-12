import { EducationData } from '@/types/experienceTypes';
import api from '@/utils/api/api';
import { AxiosResponse } from 'axios';

const getEducationData = async (): Promise<EducationData | null> => {
  try {
    const response: AxiosResponse<EducationData> = await api.get('/educations');
    return response.data;
  } catch (error) {
    console.error('Error fetching technology data:', error);
    return null;
  }
};

export default getEducationData;
