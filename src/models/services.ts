import { LatestNewsPayload } from "./responses-payload";

export type NewsService = {
    getLatestNews: () => Promise<LatestNewsPayload | undefined>; // api to get filtered news from news.io
    setTitleFilter: (titleFilter: string) => void; //set filter value 
}