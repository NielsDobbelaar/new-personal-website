import { WorkExperienceData } from '@/types/experienceTypes';
import api from '@/utils/api/api';
import { AxiosResponse } from 'axios';

const getWorkExperiencesDate = async (): Promise<WorkExperienceData | null> => {
  try {
    const response: AxiosResponse<WorkExperienceData> =
      await api.get('/work-experiences');
    return response.data;
  } catch (error) {
    console.error('Error fetching technology data:', error);
    return null;
  }
};

export default getWorkExperiencesDate;
