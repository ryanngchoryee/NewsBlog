import React, { createContext, useContext, ReactNode } from 'react';
import axios, { AxiosResponse } from "axios";
import { GetLatestNews } from '../models/responses-body';
import { NewsService } from '../models/services';
import { LatestNewsPayload } from '../models/responses-payload';

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

const NewsProvider = ({ children }: { children: ReactNode }) => {
    const baseUrl = 'https://newsdata.io/api/1/news';
    // Specify the content type as JSON in the request headers
    const requestHeader = {
        'Content-Type': 'application/json',
    };

    // Define the function to get the latest news
    const getLatestNews = async (titleFilter: string, page?: number): Promise<LatestNewsPayload> => {
        const getNewsBody: GetLatestNews = {
            apikey: API_KEY,
            language: 'en',
            qlnTitle: titleFilter,
            full_content: 0,
            size: 3,
            prioritydomain: 'top',
            page: page,
        };
        try {
            const response: AxiosResponse = await axios.get(baseUrl, {
                headers: requestHeader,
                params: getNewsBody,
            });
            return response.data;
        } catch (error) {
            handleCatch(error);
            throw error;
        }
    }

    return (
        <NewsContext.Provider value={{ getLatestNews }}>
            {children}
        </NewsContext.Provider>
    );
};

const useNewsProvider = (): NewsService => {
    const context = useContext(NewsContext);
    if (context === undefined) {
        throw new Error('Undefined NewsContext');
    }
    return context;
};

export default NewsProvider;