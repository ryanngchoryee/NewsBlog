import { LatestNewsPayload } from "./responses-payload";

export type NewsService = {
    getLatestNews: () => Promise<LatestNewsPayload | undefined>;
    setTitleFilter: (titleFilter: string) => void;
}