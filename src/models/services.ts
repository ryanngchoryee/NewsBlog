import { LatestNewsPayload } from "./responses-payload";

export interface NewsService {
    getLatestNews: (titleFilter: string, page?: number) => Promise<LatestNewsPayload>;
}