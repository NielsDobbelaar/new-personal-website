import { Image, Meta } from './common';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export interface BlogData {
  data: BlogPost[];
  meta: Meta;
}

export interface APIBlogPost {
  data: BlogPost;
  meta: Record<string, never>;
}

export interface BlogPost {
  id: number;
  documentId: string;
  Title: string;
  subtitle: string;
  body: BlocksContent[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}
