import { News } from "./news";

export interface LatestNewsPayload {
    status: string;
    totalResults: number;
    results: News[];
    nextPage: number;
}