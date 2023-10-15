import React, { useEffect, useState } from 'react'
import Navigation from '../components/navbar'
import Container from 'react-bootstrap/esm/Container'
import { useNewsProvider } from '../providers/news-context';
import { News } from '../models/news';
import NewsCarousel from '../components/news-carousel';
import MsgOverlay from '../components/msg-overlay';

const Home: React.FC = () => {
    const { getLatestNews, setTitleFilter } = useNewsProvider();
    const [filteredNews, setFilteredNews] = useState<News[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const onTitleFilterChange = (newTitleFilter: string) => {
        setTitleFilter(newTitleFilter);
    };

    useEffect(() => {
        //Update the news list when the titleFilter changes
        const fetchNews = async () => {
            setIsLoading(true);
            const data = await getLatestNews();
            if (data) {
                //Update the filtered news based on the titleFilter
                setFilteredNews(data.results);
            }
            setIsLoading(false);
        };
        fetchNews();
    }, [getLatestNews]);

    return (
        <Container fluid className='p-0' >
            <MsgOverlay isLoading={isLoading} />
            <Navigation onTitleFilterChange={onTitleFilterChange} />
            <NewsCarousel news={filteredNews} />
        </Container>
    )
}

export default Home