import { ProjectsData } from '@/types/projectsTypes';
import api from '@/utils/api/api';
import { AxiosResponse } from 'axios';

const getProjectsData = async (): Promise<ProjectsData | null> => {
  try {
    const response: AxiosResponse<ProjectsData> = await api.get(
      '/projects?populate=*'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching project data:', error);
    return null;
  }
};

export default getProjectsData;
