import { Image } from './common';

export default interface AboutMe {
  data: AboutMeData;
  meta: any;
}

export interface AboutMeData {
  id: number;
  documentId: string;
  content: Content[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

export interface Content {
  type: string;
  children: Section[];
}

export interface Section {
  type: string;
  text: string;
  bold?: boolean;
}
