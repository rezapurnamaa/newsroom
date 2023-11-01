import { Source } from "./Source";

export interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: Source;
}
