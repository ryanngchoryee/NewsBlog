export type News = {
    article_id: string;
    title: string; // news title
    link: string; // news source link
    keywords: string[];
    creator: string[];
    video_url?: string;
    description: string; //news description
    pubDate: string;
    image_url?: string; // news image url (can be undefined)
    source_id: string;
    source_priority: string;
    country: string[];
    category: string[];
    language: string;
}