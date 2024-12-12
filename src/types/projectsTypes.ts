import { Image, Meta } from '@/types/common';

export interface ProjectsData {
  data: Project[];
  meta: Meta;
}

export interface Project {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  link: string;
  body: string;
  image: Image;
}
