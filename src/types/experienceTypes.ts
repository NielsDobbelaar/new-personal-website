import { Meta } from './common';

export interface WorkExperienceData {
  data: WorkExperience[];
  meta: Meta;
}

export interface WorkExperience {
  id: number;
  documentId: string;
  title: string;
  started: string;
  ended: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface EducationData {
  data: Education[];
  meta: Meta;
}

export interface Education {
  id: number;
  documentId: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  institution: string;
}
