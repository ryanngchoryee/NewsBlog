import { News } from "./news";

export type LatestNewsPayload = {
    status: string;
    totalResults: number;
    results: News[];
    nextPage: number; //store next page index info
}