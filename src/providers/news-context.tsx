import React, { createContext, useContext, ReactNode, useState } from 'react';
import axios, { AxiosResponse, AxiosResponseHeaders } from "axios";
import { GetLatestNews } from '../models/responses-body';
import { NewsService } from '../models/services';
import { LatestNewsPayload } from '../models/responses-payload';
import { News } from '../models/news';

const API_KEY = process.env.REACT_APP_API_KEY; // news.io public api key
const NewsContext = createContext<NewsService | undefined>(undefined); // news api context

// Shared method for API request errors handling
const handleCatch = (error: any) => {
    // potential use toast to display message, or adding retry
    if (error.response) {
        //console.error("Server responded with an error:", error.response.status, error.response.data);
    } else if (error.request) {
        //console.error("No response received from the server.");
    } else {
        //console.error("Error:", error.message);
    }
}

export const NewsProvider = ({ children }: { children: ReactNode }) => {
    const baseUrl: string = 'https://newsdata.io/api/1/news';
    // Specify the content type as JSON in the request headers
    const requestHeader: object = {
        'Content-Type': 'application/json',
    };

    // news title filter 
    const [titleFilter, setTitleFilter] = useState<string>(''); //empty string will send indefined in api request

    // Define the function to get the latest news
    const getLatestNews = async (): Promise<LatestNewsPayload | undefined> => {

        const getNewsBody: GetLatestNews = {
            apikey: API_KEY,
            language: 'en',
            qInTitle: titleFilter !== '' ? titleFilter : undefined,
            full_content: 0,
            size: 3,
            prioritydomain: 'top',
        };

        try {
            const response: AxiosResponse<LatestNewsPayload> = await axios.get(baseUrl, {
                headers: requestHeader,
                params: getNewsBody,
            });
            if (response.status === 200 && response.data.status === "success") {
                return response.data;
            }
            else {
                throw Error("Failed to call api");
            }
        } catch (error) {
            handleCatch(error);
            return undefined;
        }
    }

    return (
        <NewsContext.Provider value={{ getLatestNews, setTitleFilter }}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNewsProvider = (): NewsService => {
    const context = useContext(NewsContext);
    if (context === undefined) {
        throw new Error('Undefined NewsContext');
    }
    return context;
};