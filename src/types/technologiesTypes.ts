import { Image, Meta } from './common';

export interface Technologies {
  data: Technology[];
  meta: Meta;
}

export interface Technology {
  id: number;
  documentId: string;
  slug: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: Image;
}
